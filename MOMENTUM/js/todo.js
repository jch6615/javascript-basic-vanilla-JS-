const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
}
//어떤 버튼의 내용을 지워야하는지 인식하지 못하고 있다.
//모든 버튼이 같은 eventListner을 가지고 있기 때문이다.
//submit 할때 처음 정보를 event argument를 통해 가져왔듯이 event 를 통해서 정보를 가져오자.
//event.target은 event가 발생한 대상을, event.target.paraentElement은 대상의 부모 요소를 알려준다.

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";  
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDosubmit);