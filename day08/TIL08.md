# git허브 실습 

## 깃 명령어
git status
git add . -> 새로 만든 파일, 수정된 파일, 삭제된 파일을 포함하여 현재 폴더 내의 모든 변경 사항을 스테이징 영역에 올림.
git commit -m "Update '파일명'" -> 특정 파일 커밋
git commit -m "커밋 메시지" 올린 파일들을 한꺼번에 커밋
git push origin main 

## 브랜치 관련
git checkout -b 브렌치이름 = 브랜치 생성과 동시에 이동하기
-- 이후 add commit 등 사용하여 브랜치 개발
git checkout main = 메인 브랜치로 이동하기
git pull origin main = 머지하기 전에 main을 최신 상태로 업데이트
git merge 브랜치이름 = 머지 갈김
git push origin main = 머지된 수정사항을 깃허브로 푸시하기
git branch -d 브랜치이름 = 역할을 다한 브랜치 삭제

## fork 프로그램 설치
fork 프로그램을 설치하여 다양한 터미널 깃 명령어를 소프트웨어로 활용할 수 있음. 
그러나 깃을 조금 더 잘 익히기 위하여 우선 터미널 명령어로 브렌치 및 머지까지 테스트 진행
