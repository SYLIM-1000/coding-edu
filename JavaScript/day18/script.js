// console.log("시작");

// setTimeout(() => {
//     console.log("1초 후 실행");
// },1000);

// console.log("끝");

// setTimeout(() => {
//     console.log("3초 후 실행")
// },3000);


// 과제
// 빵 주문 타임아웃
console.log("빵 주문 완료!");
setTimeout(() => {
    console.log("빵이 완성됐어요");
},3000);

// 셋 타임아웃 카운트 올리기
console.log("카운트다운 시작");
let i = 5;
const timer = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) {
        clearInterval(timer);
        console.log("게임 스타트!");
    }
}, 1000);

// 패스트푸드 주문 시스템
// 감자튀김 주문 약속 만들기
function makeFries() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("감자튀김이 완성됐습니다!");
        }, 2000);
    })
}

// 햄버거 약속
function makeburger() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("햄버거 완성이요") 
        }, 2000);
    })
}

// 주문 순서대로 처리하는 async 함수 만들기 
async function startOrder() {
    console.log("세트 주문이 완료됐습니다.");

    //첫 번째 작업 완료 
    const friesResault = await makeFries();
    console.log(friesResault);

    //두 번째 작업 완료 
    const burgerResult = await makeburger();
    console.log(burgerResult);

    console.log("주문하신 세트 완성되었습니다!");
}

startOrder();