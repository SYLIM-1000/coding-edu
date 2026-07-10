// console.log(document);

// const title = document.getElementById("title");
// console.log(title);

// title.textContent = "안녕하세요";

const displayName = document.getElementById('displayName');
// console.log(displayName);
// const displayHobby = document.getElementById('displayHobby');
// console.log(displayHobby);

// displayName.textContent = "승용";
// displayHobby.textContent = "코딩";

// const title2 = document.querySelectorAll(".changeValue");
// console.log(title2);

// const hobbys = document.querySelectorAll(".hobby");
// console.log(hobbys);

const nameInput = document.getElementById("name");
// console.log(nameInput);

const hobbyAll = document.querySelectorAll(".hobby");
// console.log(hobbyAll);
// console.log(hobbyAll[0].value);
// console.log(hobbyAll[1].value);
// console.log(hobbyAll[2].value);

// const hobbyValues = document.querySelectorAll(".hobby");
// const hobbys = [];
// for (let i = 0; i < hobbyAll.length; i++) {
//     hobbys.push(hobbyAll[i].value);
// }
// console.log(hobbys);

const changeBtn = document.getElementById("changeBtn");
// console.log(changeBtn);

// 버튼 작업. 누르면 바뀌는 작업
changeBtn.addEventListener("click", () => {
    // 현재 이름 가져오기
    const currentName = nameInput.value;
    // console.log(currentName);

    // 화면에 이름을 표시하기
    displayName.textContent = currentName;
    console.log(displayName.textContent);

    //클릭한 순간의 '취미' 입력값들 가져오기. 여러개이므로 selectorAll
    hobbyInputs = hobbyAll
        for (let i = 0; i < hobbyInputs.length; i++) {
            // i가 0~2 일때 displayHobby1~3 요소 찾기
            const displayHobby = document.getElementById(`displayHobby${i+1}`);
            if (displayHobby) {
                displayHobby.textContent = hobbyInputs[i].value
            }
        }
    // console.log(hobbyInputs[0].value)
    const hobbys = [] ;
        for (let i = 0; i < hobbyInputs.length; i++) {
            hobbys.push(hobbyInputs[i].value)
        }
        console.log(hobbys)
});

const jsContainer = document.getElementById("container");
const jsCard = document.createElement("div");
const jsTodoItem = document.getElementById("todoItem");
jsCard.textContent = "안녕하ddddd세요";
jsContainer.appendChild(jsCard);

const jsAddBtn = document.getElementById("todoBtn");
const jsTodolist = document.getElementById("todoList");
jsAddBtn.addEventListener("click", () => {
    // newTodo를 만들어서 li 엘레멘트를 만들도록 함
    const newTodo = document.createElement("li");

    // 만들어 놓은 newTodo에 텍스트를 넣음
    newTodo.textContent = jsTodoItem.value;

    // UL 태그의 자식으로 추가하여 화면 노출
    jsTodolist.appendChild(newTodo);

});
