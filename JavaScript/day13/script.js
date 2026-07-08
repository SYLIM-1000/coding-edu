// // for 문 사용
// for (let i=1; i<=5; i++) {
//     console.log(i)
// }
    

// for (let i=1; i<=10; i+=2){
//     console.log(i)
// }

// for (let i=1; i<=10; i++) {
//     if (i%2 === 0) {
//         console.log(i)
//     }
// }

// // while문 연습
// let i=1;
// while (i<=5) {
//     console.log(i);
//     i++;
//  }

// // do while 문 = 거의 본 적이 없음
// let i=1;
// do {
//     console.log(i);
// } while (i<5);


// 중간에 IF문으로 brake가 있으면 내부 IF문에서 즉시 종료되고 i에 5가 들어갔음에도 콘솔에 5가 안찍히며 4까지만 출력됨.
// for(let i=1; i<= 10; i++) {
//     if(i===5) {
//         break;
//     }
//     console.log(i)
// }

// // 컨티뉴 관련
// for (let i=1; i<=5; i++) {
//     if(i===3){
//         continue; // 반복중인 코드 중 아래의 코드를 실행하지 않고 건너뛴다는 것. 그래서 3의 콘솔 출력이 없는것
//     }
//     console.log(i)
// }

// 과제
//  1. 숫자 출력
for (let i=1; i<=10; i++) {
    console.log('2x',i,'=',`${i*2}`);
}

// 2. 짝수 출력
for (let i=1; i<=10; i++) {
    console.log(i*2);
}

// 3. 구구단 2단만 출력
for (let dan=2; dan<=2; dan++) {
    for (let i=1; i<=9; i++) {
        console.log(`${dan*i}`);
    }
}

for (let i=1; i<=9; i++) {
    console.log(`${i*2}`);
}

// 4. while문 연습 - 5부터 1까지 거꾸로 출력해라
let i=5;
// while (i>=1) {
//     console.log(i);
//     i--;
// }

// 5. do while 작성
do {
    console.log(i);
    i++;
} while (i<=15);

// 도전1 구구단
// 3. 구구단 출력 (도전1)
for (let dan=1; dan<=9; dan++) {
    for (let i=1; i<=9; i++) {
        console.log(`${dan}`,`x`,`${i}`,`=`,`${dan*i}`);
    }
}

// 도전2 break - 7까지만 출력되고 종료
for (let i=1; i<=10; i++) {
    if(i===8) {
        break;
    }
    console.log(i);
}

// 도전3 continue를 이용해서 짝수만 출력하기
for (let i=1; i<=10; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// 도전4 반복문을 이용해 *을 ***** 까지 연속으로 출력해라
for (let i=1; i<=5; i++) {
    console.log(`*`.repeat(i)) ;
}
// string을 반복하는 함수 .repeat() 에 대해서 파악하고 이용함.