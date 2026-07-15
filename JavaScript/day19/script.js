
// 데이터 불러오기 버튼
const deployBtn = document.querySelector("#deploy-data")
// 데이터 출력할 ul 태그
const userList = document.querySelector("#user-data")

// 과제 1 버튼 클릭 이벤트 리스너 등록
// deployBtn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         userList.innerHTML = "";
//         users.forEach((user) => {
//             const li = document.createElement("li")
//             li.textContent = `이름: ${user.name}, 이메일: ${user.email}, 도시: ${user.address.city}`;
//             userList.appendChild(li);
//         });
//     })
//     .catch((error) => {
//         console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
//     });
// });

// 과제 2 회원 수 출력하기
deployBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP 에러 발생. 상태코드: ${response.status}`);
        }
        return response.json();
    })
    .then((users) => {
        userList.innerHTML = "";
        const li = document.createElement("li");
        li.textContent = `총 회원수는 ${users.length}명 입니다`;
        userList.appendChild(li);
    })
    .catch((error) => {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    })
});



//사용자의 이름과 번호 출력하기
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        // 여기에 작성
        users.forEach((users, index) => {
            console.log(`${index + 1}. 이름: ${users.name}, 전화번호: ${users.phone}`);
        })
    });


// 우선 API에서 오는 데이터들 전체 확인해 보기
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.table(data);
    });


//html id가 user-list인 곳에 이름과 번호를 추가하기
// html에서 id가 user-list인 요소를 찾아서 list라는 상수로 저장
const list = document.querySelector("#user-list");

// 무료 모의 API 서버에 저장된 데이터 전체를 list로 가져오기
fetch("https://jsonplaceholder.typicode.com/users")
    // 위 요청에 대한 response가 오면, 그 객체를 JSON 형태로 변환하겠다.
    .then((response) => response.json())
    // 데이터가 변환되면 변환된 배열을 users 라는 매개변수로 받아 함수 본문{}을 실행한다.
    .then((users) => {
        // 배열인 users 의 각 요소별 user에 대한 반복문 루푸를 실행한다.
        users.forEach((user) => {
            // 메모리상에 새로운 HTML 리시트 아이템 태그(LI)를 동적으로 생성. 리스트 준비함.
            const li = document.createElement("li");
            // li로 생성한 내용을 텍스트 형태로 = 이후의 형태로 저장
            li.textContent = `이름: ${user.name}, 전화번호: ${user.phone}`;
            // 준비된 li를 list에 추가함(화면에 추가됨).
            list.appendChild(li);
        });
    });