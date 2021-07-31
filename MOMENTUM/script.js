//const loginForm = document.querySelector("#login-form");
/* ❗️ documet.querySelector ➡️ to find element from HTML */
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
/* ❗️ loginForm.querySelector ➡️  to find element from in side loginForm  */
/* it is possible because loginForm is HTML element ➡️  More focused search */

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);