const STORAGE_KEY = "calc_history"; // localStorage 키
const MAX_COUNT   = 20;             // 최대 저장 개수

//과제 5 — loadHistory: 기록 불러오기
export const loadHistory = () => {
    // 💡 [과제 5] localStorage에서 기록을 불러오세요.
    //
    // 순서:
    //  1. localStorage.getItem(STORAGE_KEY) 로 값을 가져옵니다.
    //  2. 값이 없으면(null) 빈 배열 [] 을 반환합니다.
    //  3. 값이 있으면 JSON.parse() 로 변환해 반환합니다.
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        return [];
    }
    return JSON.parse(data);
};

//과제 6 — saveHistory: 기록 저장
export const saveHistory = (history) => {
    // 💡 [과제 6] 기록 배열을 localStorage에 저장하세요.
    //
    // 순서:
    //  1. MAX_COUNT(20)개 초과분을 제거합니다.
    //     (힌트: history.slice(0, MAX_COUNT))
    //  2. JSON.stringify() 로 배열을 문자열로 변환합니다.
    //  3. localStorage.setItem(STORAGE_KEY, ...) 으로 저장합니다.
    const limitedHistory = history.slice(0, MAX_COUNT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedHistory));
};

//과제 7 — addHistory: 기록 항목 추가
export const addHistory = (expression, result) => {
    // 💡 [과제 7] 새 계산 결과를 기록에 추가하고 저장하세요.
    //
    // 저장할 항목 형식:
    //   { expression, result, date: new Date().toLocaleString("ko-KR") }
    //
    // 순서:
    //  1. loadHistory() 로 기존 기록 배열을 가져옵니다.
    //  2. 새 항목을 배열 맨 앞에 추가합니다.
    //     (힌트: [새항목, ...기존배열]  또는  배열.unshift(새항목))
    //  3. saveHistory() 로 저장합니다.
    //  4. 업데이트된 배열을 반환합니다.
    const newItem = {
        expression,
        result,
        date: new Date().toLocaleString("ko-KR")
    };
    const history = loadHistory();
    const updatedHistory = [newItem, ...history];
    saveHistory(updatedHistory);
    return updatedHistory;
};