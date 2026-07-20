const creatCounter = () => {
    //초기값 설정하기
    let count = 50;

    //반환할 함수 내용
    return () => {
        count = count + 5;
        console.log(count);
    };
};

//함수 호출
const pluscount = creatCounter();
pluscount();
pluscount();
pluscount();

// 과제 1 포인트 관리자 만들기
const createPointManager = () => {
    let point = 100;
    const addPoint = () => {
        point += 20;
        console.log(point);
    };
    const usePoint = () => {
        point -= 30;
        console.log(point);
    };
    // 두 함수를 객체 형태로 반환
    return { addPoint, usePoint };
};
// 구조 분해 할당을 통해 함수만 개별적으로 꺼내오기
const { addPoint, usePoint } = createPointManager();
// 실행 및 출력
addPoint(); // 출력: 120
addPoint(); // 출력: 140
usePoint(); // 출력: 110
usePoint(); // 출력: 80


// 과제2 - 20세 이상 학생 이름 출력하기
const students = [
    { name: "철수", age: 18, vip: true },
    { name: "영희", age: 22, vip: false },
    { name: "민수", age: 25, vip: true },
    { name: "지훈", age: 19, vip: false },
];

// 성인만 출력
const orderMan = students
    .filter(students => students.age >= 20)
    .map(students => students.name);

console.log("성인만 출력 :", orderMan);

// VIP만 출력
const isVip = students
    .filter(students => students.vip == true)
    .map(students => students.name);

console.log("VIP만 출력 :", isVip);

// 4명의 평균 나이 계산하기
const averageAge = students.reduce
    ((total, currentAge) => total + currentAge.age, 0) / 4;

console.log("평균 나이 :", averageAge);
