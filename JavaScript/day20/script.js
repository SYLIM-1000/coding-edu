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


// 과제1 - 20세 이상 학생 이름 출력하기
const students = [
    { name: "철수", age: 18 },
    { name: "영희", age: 22 },
    { name: "민수", age: 25 },
    { name: "지훈", age: 19 },
];

const orderMan = students
    .filter(students => students.age >= 20)
    .map(students => students.name);

console.log("성인만 출력 :", orderMan);