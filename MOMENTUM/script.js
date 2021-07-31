const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}

//submit을 감지해보자.
loginForm.addEventListener("submit", onLoginSubmit);
//submit 될때 onLoginSubmit 함수가 발동된다.
//⭐️ submit은 엔터를 누르거나 버튼을 클릭할때 발생한다.
// form 이 submit 되는 것은 form submit의 default behavior이다.(브라우저가 그렇게 프로그래밍됨)