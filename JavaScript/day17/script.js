
const displayName = document.getElementById('displayName');
const displayHobby = document.getElementById('displayHobby');
const nameInput = document.getElementById("name");
const hobbyAll = document.getElementById("hobby1");
const changeBtn = document.getElementById("changeBtn");

// 버튼 작업. 누르면 바뀌는 작업
changeBtn.addEventListener("click", () => {
    // 현재 이름 가져오기
    const currentName = nameInput.value;
    // console.log(currentName);

    // 현재 자기소개 가져오기
    const currentIntro = hobbyAll.value

    // 화면에 이름을 표시하기
    displayName.textContent = currentName;
    console.log(displayName.textContent);

    // 화면에 자기소개 표시하기
    displayHobby.textContent = currentIntro;
    console.log(displayHobby.textContent);

    // 입력하면 박스 비우기
    nameInput.value="";
    hobbyAll.value="";

});

const jsContainer = document.getElementById("container");
const jsCard = document.createElement("div");
const jsTodoItem = document.getElementById("todoItem");
jsCard.textContent = "안녕하ddddd세요";
jsContainer.appendChild(jsCard);


// 할일 추가하기
const jsAddBtn = document.getElementById("todoBtn");
const jsTodolist = document.getElementById("todoList");
jsAddBtn.addEventListener("click", () => {
    // newTodo를 만들어서 li 엘레멘트를 만들도록 함
    const newTodo = document.createElement("li");

    // 만들어 놓은 newTodo에 텍스트를 넣음
    newTodo.textContent = jsTodoItem.value;
    console.log(newTodo.textContent);

    // UL 태그의 자식으로 추가하여 화면 노출
    jsTodolist.appendChild(newTodo);

    // 값 입력되면 인풋박스 비우기
    jsTodoItem.value = "";

});

// 먹구싶은 음식 추가하기
const jsFoodInput = document.getElementById('eatFood')
const jsFoodList = document.getElementById('foodList')

jsFoodInput.addEventListener("change", (e) => {
    //newFood를 만들어서 위 이벤트가 실행되면 Li 요소를 만듬
    const newFood = document.createElement('li')

    // 새로만든 newFood Li에 텍스트를 넣음 (내가입력한 음식)
    newFood.textContent = jsFoodInput.value;
    console.log(newFood.textContent);

    // 앞서 만든 LI요소 + 텍스트를 UL태그의 자식으로 위치시킴
    jsFoodList.appendChild(newFood)

    // 입력 인풋박스 비우기
    jsFoodInput.value = "";
})

// 제출하기
const jsForm = document.getElementById("submitForm")
const jsInput = nameInput
const jsList = hobbyAll

jsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (jsInput.value==="") {
        alert("값을 입력해 주세요");
        return;
    }
    console.log(jsInput.value);
    console.log(jsList.textContent);
})