import { 
    appendNumber, 
    appendOperator, 
    calculate, 
    deleteLast, 
    clearAll,
    setExpression
} from "./calculator.js";

import { 
    loadHistory, 
    saveHistory, 
    addHistory 
} from "./history.js";

document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");
    const clearHistoryBtn = document.getElementById("clear-history");

    // 기록 화면 렌더링 함수
    const renderHistory = () => {
        if (!historyList) return;
        const history = loadHistory();

        if (history.length === 0) {
            historyList.innerHTML = `<li class="empty-history">계산 기록이 없습니다.</li>`;
            return;
        }

        historyList.innerHTML = history.map((item) => `
            <li class="history-item" data-res="${item.result}">
                <div class="history-item-exp">${item.expression} =</div>
                <div class="history-item-res">${item.result}</div>
                <div class="history-item-date">${item.date || ""}</div>
            </li>
        `).join("");
    };

    // 기록 항목 클릭 시 계산기에 결과 적용
    historyList?.addEventListener("click", (e) => {
        const item = e.target.closest(".history-item");
        if (item) {
            const resValue = item.getAttribute("data-res");
            if (resValue) {
                setExpression(resValue);
            }
        }
    });

    // 기록 전체 삭제 버튼
    clearHistoryBtn?.addEventListener("click", () => {
        saveHistory([]);
        renderHistory();
    });

    // 숫자 버튼 클릭
    document.querySelectorAll(".btn-num").forEach((btn) => {
        btn.addEventListener("click", () => {
            const num = btn.getAttribute("data-num");
            if (num !== null) {
                appendNumber(num);
            }
        });
    });

    // 연산자 버튼 클릭
    document.querySelectorAll(".btn-op").forEach((btn) => {
        btn.addEventListener("click", () => {
            const op = btn.getAttribute("data-op");
            if (op !== null) {
                appendOperator(op);
            }
        });
    });

    // AC (초기화) 버튼
    document.getElementById("btn-clear")?.addEventListener("click", () => {
        clearAll();
    });

    // DEL (지우기) 버튼
    document.getElementById("btn-delete")?.addEventListener("click", () => {
        deleteLast();
    });

    // = (계산) 버튼
    document.getElementById("btn-equals")?.addEventListener("click", () => {
        const calcResult = calculate();
        if (calcResult && calcResult.expression && calcResult.result) {
            addHistory(calcResult.expression, calcResult.result);
            renderHistory();
        }
    });

    // 키보드 입력 지원
    window.addEventListener("keydown", (e) => {
        if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
            appendNumber(e.key);
        } else if (["+", "-", "*", "/"].includes(e.key)) {
            appendOperator(e.key);
        } else if (e.key === "Enter" || e.key === "=") {
            e.preventDefault();
            const calcResult = calculate();
            if (calcResult && calcResult.expression && calcResult.result) {
                addHistory(calcResult.expression, calcResult.result);
                renderHistory();
            }
        } else if (e.key === "Backspace") {
            deleteLast();
        } else if (e.key === "Escape" || e.key.toLowerCase() === "c") {
            clearAll();
        }
    });

    // 초기 기록 렌더링
    renderHistory();
});
