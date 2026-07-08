// const foods =['고기','돼지고기','소고기','양고기','닭고기','물고기']
// console.log(foods[1])
// console.log(foods) // 푸드 배열 출력 -> ['어쩌구'] 이런 식으로 출력됨
// console.log(foods .length) // foods 배열의 인덱스 수
// console.log(foods[1] .length) // 배열 내 1번 인덱스의 글자 개수

// const favoriteFood =['삼겹살','슈크림','치킨','부대찌개','김치찌개']
// console.log(favoriteFood[1])
// console.log(favoriteFood) // 푸드 배열 출력 -> ['어쩌구'] 이런 식으로 출력됨
// console.log(favoriteFood .length) // foods 배열의 인덱스 수
// console.log(favoriteFood[1] .length) // 배열 내 1번 인덱스의 글자 개수

// favoriteFood.push("제로사이다");
// console.log(favoriteFood)

// favoriteFood.unshift("햄버거")
// console.log(favoriteFood)



// 과제
const favoriteFood =['삼겹살','슈크림','치킨','부대찌개','김치찌개'];

//배열 전체 출력
console.log(favoriteFood);

//첫 번째, 마지막 출력
console.log(favoriteFood[0]);
console.log(favoriteFood[5]);

//배열 개수 출력
console.log(favoriteFood.length);

// 배열 메서드 활용
favoriteFood.push("제로사이다");
console.log(favoriteFood);

favoriteFood.pop();
console.log(favoriteFood);

favoriteFood.unshift("닭갈비");
console.log(favoriteFood);

favoriteFood.shift();
console.log(favoriteFood);

//splice 활용하여 추가하고 삭제하고 추가삭제 동시에 하기
favoriteFood.splice(1,2); //1번부터 2개 삭제 (슈크림, 치킨 삭제)
console.log(favoriteFood);

favoriteFood.splice(1,0,"피자","불고기") // 1번위치에 0개 삭제하고 피자와 불고기 추가
console.log(favoriteFood);

favoriteFood.splice(2,2,"보쌈","찜닭") // 2번 이후 3,4번 2개 삭제 후 그 자리에 보쌈 찜닭 추가
console.log(favoriteFood);

//slice 진행
let result = favoriteFood.slice([2],[4]);
console.log(result); // 이 경우 1~3 항목이 들어옴 1부터 4직전까지

// 나를 객체로 표현하기
const seungYong = {
    name: "임승용",
    age: "38",
    foodWhatilike: ["삼겹살","탕수육","슈크림"],
    hobbies: ["러닝","커피","여행"],
    visitedCountries: ["일본","미국","중국"],
    major: "경영학",
}
console.log(seungYong);
console.log(seungYong.name);
console.log(seungYong.age);
console.log(seungYong.foodWhatilike);
console.log(seungYong.hobbies);
console.log(seungYong.visitedCountries);

// 사람 목록 만들기
const userList = [
    seungYong,
    {
        name: "황인성",
        age: "38",
        foodWhatilike: ["치킨","팥빵","파스타"],
        hobbies: ["축구","스키","독서"],
        visitedCountries: ["스리랑카","말레이시아","인도"],
        major: "중국어"
    }
]
console.log(userList[0].name);
console.log(userList[1].name);
console.log(userList[0].hobbies);
console.log(userList[1].hobbies);
console.log(userList.length);

//도전과제
const studentList = [
    seungYong,
    {
        name: "황인성",
        age: "38",
        hobbies: ["축구","스키","독서"],
        major: "중국어"
    },
    {
        name: "장정훈",
        age: "37",
        hobbies: ["헬스","게임","야구"],
        major: "경제학"
    },
    {
        name: "이종화",
        age: "36",
        hobbies: ["공부","먹방","여행"],
        major: "기계공학"
    },
    {
        name: "김진우",
        age: "39",
        hobbies: ["음주가무","노래방","댄스"],
        major: "철학"
    }
]

// 마지막 학생의 전공 출력
console.log(studentList[4].major);

// 첫 번째 학생의 이름 출력
console.log(studentList[0].name);

// splice()를 이용해 세 번째 학생 정보를 새로운 학생으로 변경하기
studentList.splice(2,1,{
    name: "지요셉",
    age: "39",
    hobbies: ["음악감상","클럽","영화감상"],
    major: "체육학과"
})
console.log(studentList[2].name)
studentList.forEach(student => {
    console.log(student.name);
})

// slice를 이용하여 앞의 2명만 복사한 새로운 배열 만들기
let resultStudent = studentList.slice([0],[3])
resultStudent.forEach(student => {
    console.log(student.name);
})

