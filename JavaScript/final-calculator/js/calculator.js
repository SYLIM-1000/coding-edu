// 계산기 상태 변수
let expression = ""; // 현재 입력 중인 수식
let justCalculated = false; // 방금 = 을 눌렀는지 여부

// 상태 Getter & Setter
export const getExpression = () => expression;
export const setExpression = (val) => {
    expression = val.toString();
    justCalculated = false;
    updateDisplay();
};

// 디스플레이 업데이트 헬퍼 함수
export const updateDisplay = () => {
    const mainDisplay = document.getElementById("main-display");
    if (mainDisplay) {
        mainDisplay.textContent = expression || "0";
    }
};

// 전체 초기화 헬퍼 함수
export const clearAll = () => {
    expression = "";
    justCalculated = false;
    const subDisplay = document.getElementById("sub-display");
    if (subDisplay) {
        subDisplay.textContent = "";
    }
    updateDisplay();
};

//과제 1 — appendNumber: 숫자 및 소수점 입력
export const appendNumber = (num) => {
    // 1. 소수점(.) 입력 유효성 검사 (현재 입력 중인 마지막 숫자 구간 기준)
    if (num === ".") {
        // 연산자(+, -, *, /) 기준으로 수식을 잘라 마지막 숫자만 추출
        const lastNumber = expression.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes(".")) {
            return; // 현재 숫자에 이미 소수점이 있으면 무시
        }
    }

    // 2. 이전에 계산이 끝난 직후라면 수식 초기화
    if (justCalculated === true) {
        expression = "";
        justCalculated = false;
    }

    // 3. expression이 "0"일 때 
    if (expression === "0") {
        if (num === ".") {
            expression = "0.";
        } else {
            expression = num.toString();
        }
    } else {
        expression += num.toString();
    }

    justCalculated = false;
    updateDisplay();
};

//과제 2 — appendOperator: 연산자 입력
export const appendOperator = (op) => {
    // 규칙 1. expression이 비어 있으면 무시 (연산자로 시작 불가)
    if (expression === "") {
        return;
    }

    const lastChar = expression[expression.length - 1];
    const operators = ["+", "-", "*", "/"];

    // 규칙 2. 마지막 문자가 이미 연산자이면 새 연산자로 교체
    if (operators.includes(lastChar)) {
        expression = expression.slice(0, -1) + op;
    } else {
        // 규칙 3. justCalculated가 true여도 expression을 유지한 채 연산자 추가
        expression += op;
    }

    justCalculated = false;
    updateDisplay();
};

//과제 3 — calculate: 계산 실행
export const calculate = () => {
    // 규칙 1. expression이 비어 있거나 연산자로 끝나면 null 반환
    if (!expression || ["+", "-", "*", "/"].includes(expression[expression.length - 1])) {
        return null;
    }

    // 규칙 2. 0으로 나누기 감지 → subDisplay에 에러 메시지 표시 후 null 반환
    if (/\/0/.test(expression)) {
        const subDisplay = document.getElementById("sub-display");
        if (subDisplay) {
            subDisplay.textContent = "0으로 나눌 수 없습니다";
        }
        return null;
    }

    // 수식 계산 (Function 사용)
    const rawResult = Function('"use strict"; return (' + expression + ')')();
    // 부동소수점 오류 방지
    const result = parseFloat(rawResult.toFixed(10)).toString();

    // 규칙 3. 계산 성공 시 화면 업데이트 & justCalculated 설정
    const mainDisplay = document.getElementById("main-display");
    const subDisplay = document.getElementById("sub-display");

    if (mainDisplay) {
        mainDisplay.textContent = result;
    }
    if (subDisplay) {
        subDisplay.textContent = `${expression} =`;
    }
    justCalculated = true;

    // 규칙 4. 반환값: { expression: 수식, result: 결과값 문자열 }
    return {
        expression: expression,
        result: result
    };
};

//과제 4 — deleteLast: 마지막 문자 삭제
export const deleteLast = () => {
    // 규칙 1. justCalculated가 true이면 전체 초기화 (clearAll 호출)
    if (justCalculated === true) {
        clearAll();
        return;
    }

    // 규칙 2. 그렇지 않으면 expression의 마지막 글자 하나만 제거
    expression = expression.slice(0, -1);

    updateDisplay();
};