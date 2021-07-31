const body = document.querySelector("body");
const h1 = document.querySelector("h1");

h1.style.color = "whitesmoke";
body.style.backgroundColor = "#914EAC";

function handleWidowResize() {
    let width = window.innerWidth;
    if (width < 600) {
        body.style.backgroundColor = "#2E8CD5";
    } else if (width > 900) {
        body.style.backgroundColor = "#EEBC13";
    } else {
        body.style.backgroundColor = "#914EAC";
    }
}

window.addEventListener("resize", handleWidowResize);
