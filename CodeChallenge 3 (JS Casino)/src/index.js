/* grab HTML elements */
const casinoForm = document.querySelector("#Casino-form");
const range = document.querySelector("#range");
const guess = document.querySelector("#guess");

const userNumText = document.querySelector("#userNum");
const machineNumText = document.querySelector("#machineNum");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

/* functions */
function compareNum(event) {
    event.preventDefault();
    //machine number
    const machineNum = Math.floor(Math.random() * parseInt(range.value));
    //guess number
    const userNum = parseInt(guess.value);
    //result text user
    userNumText.innerText = `You chose: ${userNum},`;
    //result text machine
    machineNumText.innerText = `the machine chose: ${machineNum}`;
    //result
    if (userNum === machineNum) {
        result.innerText = `You won!`;
    } else {
        result.innerText = `You lost!`
    }
}

// function hideResult(event) {
//     event.preventDefault();
//     result.innerText = `please fill in all blank above!`;
//     result.classList.remove(HIDDEN_CLASSNAME);
//     result.classList.add("warning");
// }

/* event listener */
// if (range.value === "" || guess.value === "") {
//     casinoForm.addEventListener("submit", hideResult);
// } else {
// }
casinoForm.addEventListener("submit", compareNum);
userNumText.classList.remove(HIDDEN_CLASSNAME);
machineNumText.classList.remove(HIDDEN_CLASSNAME);
result.classList.remove(HIDDEN_CLASSNAME);
