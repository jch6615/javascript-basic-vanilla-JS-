const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
}
//❗️ alert는 조금 특이하기 때문에 모든 JavaScript의 행동을 멈춘다.
//즉, 페이지가 이동되기전에 alert가 뜨고, 확인을 누르면 그 이후에 페이지가 이동된다.

//submit을 감지해보자.
loginForm.addEventListener("submit", onLoginSubmit);
//submit 될때 onLoginSubmit 함수가 발동된다.
//⭐️ submit은 엔터를 누르거나 버튼을 클릭할때 발생한다.
// form 이 submit 되는 것은 form submit의 default behavior이다.(브라우저가 그렇게 프로그래밍됨)

link.addEventListener("click", handleLinkClick);

//🌟 RECAP🌟 
//❗️event가 발생시 함수를 실행하는건 우리가 아니라 브라우저이다.
//그래서 handleLinkClick에 이름만 부여할뿐, ()괄호를 붙히지 않는다.
//하지만, 실제로 JavaScript가 함수를 실행 할때에는 handleLinkClick()의 형태가아니라
//handleLinkClick({information about the event that just happened})처럼 첫 인수에는 정보를 포함시킨다.
//🌟 이 정보를 받기위해 handleLinkClick(event) 처럼 event 라는 인수로 정보를 보낼 장소를 제공한다.🌟 