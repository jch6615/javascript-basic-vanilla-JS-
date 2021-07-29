const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "active sexy-font"
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}
 //NOW, we are operating JS and Css in the right way with less codes.
 //But, there are still some of points that we can improve.

 //❗️Cleaning Code❗️
 //❗️point01. String "active" is using twice. (or more depends on case)
 // we better save "active" in variable to prevent error.
 
 //❗️point02. Bug
 // What if we already have className on elements before we update from JavaScript??
 // We have to add old className to variable every single time if we want to add className from HTML.
 // ex) const clickedClass = "active sexy-font"

    h1.addEventListener("click", handleTitleClick);

    