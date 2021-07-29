const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(setColor) {
    title.innerText = "this is clicked!";
    title.style.color = setColor;
    }
    function handleMouseEnter(setColor) {
    title.innerText = "mouse is here";
    title.style.color = setColor;
    }
    function handleMouseOut(setColor) {
    title.innerText = "mouse is out";
    title.style.color = setColor;
    }
    
    title.addEventListener("click", function(){handleTitleClick("red")});
    title.addEventListener("mouseenter", function(){handleMouseEnter("blue")});
    title.addEventListener("mouseout", function(){handleMouseOut("purple")});
