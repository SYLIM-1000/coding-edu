# 반복문

## for문 
- 반복 횟수를 잘 알고 있음. 가장 많이 사용

## while 문 
- 반복 횟수를 모름. 특정 상황에서 사용

# 인증 딥링크 Universal/App Links 전환 — 사장님 확인/작업 순서

> 2026-07-06. 가입 확인·비밀번호 재설정 메일 링크를 커스텀 스킴(`inbox://`)에서 **도메인 검증형 https 링크**
> (`https://pebble-works.com/auth/...`)로 바꿨습니다. 이러면 다른 앱이 우리 링크를 가로챌 수 없습니다.
> 코드/테스트는 이미 워크트리에 반영돼 있고, 아래는 **사장님이 대시보드에서 직접 해야 하는 코드 밖 작업**입니다.
> **순서가 중요합니다.** 위에서부터 차례대로 하세요.

## 왜 바꾸나 (쉽게)

- 지금까지 인증 메일 링크는 `inbox://...` 라는 우리 앱 전용 주소로 열렸습니다. 문제는, **다른 앱이 똑같은 `inbox://`
  주소를 등록하면 우리 인증 링크를 가로챌 수 있다**는 점입니다(표준적으로 알려진 취약점).
- 이제 `https://pebble-works.com/auth/...` 로 바꿉니다. 이 방식은 애플/구글이 **앱 설치 시점에 우리 도메인
  (pebble-works.com)에 올려둔 검증 파일을 읽어 "이 도메인은 이 앱 거다"라고 확인**하므로 가로채기가 불가능합니다.
- 사용자는 현재 사장님(TestFlight) 한 명뿐이라 한 번에 전환합니다. 구글/애플 로그인(OAuth)은 이번 대상이 아니라 그대로입니다.

## 작업 순서 (이 순서대로)

### 1. Cloudflare Worker 배포 — **다음 앱 빌드를 설치하기 전에 반드시 먼저**
- iOS는 **앱을 설치하는 그 순간** 애플 서버가 우리 도메인의 검증 파일(AASA)을 읽어갑니다. 그래서 앱 설치보다 이게 **먼저** 있어야 합니다.
- 방법: Cloudflare 대시보드 → **Workers & Pages** → **Create** → 코드 편집기에 `infra/pebble-works/worker.js` **파일 전체를 붙여넣기** → **Deploy**.
- 그다음 그 워커의 **Settings → Domains & Routes → Add → Custom Domain** 에서 `pebble-works.com` 을 추가합니다(HTTPS 자동 발급).
- **이메일 DNS(TXT/MX/DKIM)는 건드리지 마세요.** 이 워커는 검증 파일 2개와 앱 링크 착지 페이지만 담당합니다.

### 2. 배포 검증 (아래 명령이 정상 응답을 주는지 확인)
```
curl https://pebble-works.com/.well-known/apple-app-site-association
curl https://pebble-works.com/.well-known/assetlinks.json
```
- 첫 번째는 `4SX2NFXY92.com.inbox.app` 이 들어간 JSON이, 두 번째는 `com.inboxnote.app` 과 지문(sha256...)이 들어간 JSON이 나와야 합니다.
- 둘 다 리다이렉트 없이 `content-type: application/json` 으로 즉시 응답해야 정상입니다.

### 3. Supabase 대시보드 — Redirect URL 2개 추가
- Supabase 대시보드 → **Authentication → URL Configuration → Redirect URLs** 에 아래 2개를 **추가**하세요(기존 `inbox://...` 항목들은 **지우지 말고 그대로 두세요** — 전환기 안전망):
  - `https://pebble-works.com/auth/email-confirm`
  - `https://pebble-works.com/auth/password-recovery`
- (이 값이 허용목록에 없으면 인증 메일 링크가 깨집니다.)

### 4. PR 머지 후 — Edge Function 재배포
- 이 PR이 머지되면, 사장님 CLI에서 `supabase functions deploy notify-existing-account` 를 실행하세요.
- 이 함수가 "이미 가입된 이메일" 안내 메일에 넣는 재설정 링크의 주소를 새 https 로 바꿨기 때문에, 재배포해야 반영됩니다.

### 5. 다음 빌드에서 확인 (실제로 앱이 바로 열리는지)
- **iOS**: 가입 확인/비밀번호 재설정 메일의 링크가 **브라우저를 거치지 않고 앱이 바로** 열리면 성공입니다.
  - 확인 팁: iOS 메모 앱에 `https://pebble-works.com/auth/email-confirm` 를 붙여넣고 **길게 눌러** 메뉴에 **"Inbox에서 열기"** 가 뜨면 Universal Link가 잡힌 것입니다.
- **Android**: 아래 명령으로 도메인 검증 상태를 확인합니다.
```
adb shell pm get-app-links com.inboxnote.app
```
  - `pebble-works.com` 이 **verified** 로 나오면 성공입니다(브라우저 선택창 없이 앱이 바로 열립니다).

### 6. 주의 — 애플 CDN 캐시
- 애플은 검증 파일(AASA)을 자기네 CDN에 캐시합니다. 그래서 **워커를 배포한 뒤 반영까지 시간이 걸릴 수 있습니다**(보통 앱을 설치/재설치할 때 갱신됩니다). 링크가 곧바로 앱으로 안 열리면 앱을 재설치하고 잠시 뒤 다시 시도하세요.

### 7. 구 빌드(20 이하) 주의
- 예전 빌드가 보낸 재설정 메일 링크는 아직 `inbox://` 라서, 새 도메인 착지 페이지로 열릴 수 있습니다. **새 빌드를 설치하면 해소**됩니다(현재 사용자 = 사장님 한 명뿐이라 영향 미미).
- 반대로 새 빌드에서도 구 `inbox://` 링크는 **여전히 열립니다** — 전환기 안전망으로 기존 인텐트 필터/핸들러를 남겨뒀습니다.

## 릴리스(정식 출시) 때 추가로 할 일 — 지금은 안 해도 됨
- `worker.js` 의 `assetlinks.json` 에는 지금 **디버그(개발용) 서명 지문**만 들어 있습니다. 나중에 Google Play로 정식 출시할 때는
  **Play App Signing 지문**(Play Console → Setup → App integrity → App signing key certificate 의 SHA-256)을 그 배열에 **추가**해야 합니다.
  안 넣으면 Play가 서명한 빌드에서 Android 링크 검증이 실패해 브라우저(착지 페이지)로 열립니다. (worker.js 안에 TODO 주석으로도 표시해 뒀습니다.)

## 검증 완료 (코드 쪽)
- iOS: 전체 테스트 통과(딥링크 의도 매핑 순수 함수 단위 테스트 포함 — 정상 2경로 + 위조 호스트/경로 거부).
- Android: 전체 단위 테스트 통과(동일 순수 파서 테스트 + 리다이렉트 상수 https 검증).
- Deno: notify-existing-account 등 전체 통과.
- Worker: 문법 확인 + AASA/assetlinks JSON 유효성 확인.