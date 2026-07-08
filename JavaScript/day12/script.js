let isLogin = true;
let isAdmin = true;
// let age = 20;
let score = 88;
const grade = 'A';

// 도전과제 1
let age = 23;
const isEmailVerified=true;
const isBannedUser=false;

// 도전과제 2


// 나이에 따른 가입여부 조건문 
if (age >= 20) {
    console.log('회원가입이 가능합니다.')
}
else {
    console.log('미성년자는 가입할 수 없습니다.')
}

// 점수에 따른 등급
if (score >= 90) {
    console.log('A학점')
}
else if (score >= 80) {
    console.log('B학점')
}
else if (score >= 70) {
    console.log('C학점')
}
else {
    console.log('재시험')
}

// 로그인 상태 판별 프로그래밍
if (isLogin === true) {
    console.log('환영합니다!')
}
else {
    console.log('로그인해 주세요')
}

// 로그인 및 관리자 판별 프로그램
if (isLogin === true && isAdmin === true) {
    console.log('관리자 입니다.')
}
else if (isLogin === true && isAdmin === false) {
    console.log('로그인되었습니다.')
}
else {
    console.log('로그인해 주세요')
}

// 등급별 메시지 출력하기
if (grade === 'A') {
    console.log('우수')
}
else if (grade === 'B') {
    console.log('보통')
}
else {
    console.log('노력')
}

// 도전과제 1
if (age >= 20 && isEmailVerified === true && isBannedUser === false) {
    console.log('회원가입이 완료되었습니다.')
}
else if (age < 20 === false) {
    console.log('20세 이상만 가입할 수 있습니다.')
}
else if (isEmailVerified === false) {
    console.log('이메일 인증을 완료해 주세요.')
}
else {
    console.log('가입이 제한된 사용자입니다.')
}

// 도전과제 2 - 쇼핑몰 등급 및 할인 대상 판별
const totalPrice=120000;
const isCouponUser=true;

if (totalPrice >= 100000 && isCouponUser===true) {
    console.log('VIP 할인 대상입니다. 쿠폰 사용이 가능합니다.')
}
else if (totalPrice >= 100000 && isCouponUser===false) {
    console.log('VIP 할인 대상입니다.')
}
else if (totalPrice >= 50000 && isCouponUser===true) {
    console.log('할인 대상입니다. 쿠폰 사용이 가능합니다.')
}
else if (totalPrice >= 50000 && isCouponUser===false) {
    console.log('할인 대상입니다.')
}
else if (totalPrice < 50000 && isCouponUser===true) {
    console.log('쿠폰 사용이 가능합니다.')
}
else {
    console.log('할인 대상이 아닙니다.')
}


// 도전과제 3 - 로그인 결과 
// const isLogin=true;
// const isAdmin=true; 위에서 선언되어 있음
const userName="홍길동";

if (isLogin===true && isAdmin===true) {
    console.log('관리자 '+userName+'님, 환영합니다.') // '관리자 ${userName}님, 환영합니다.' 도 가능
}
else if (isLogin===true && isAdmin===false) {
    console.log(userName + '님, 환영합니다.')
}
else {
    console.log('로그인해주세요.')
}
