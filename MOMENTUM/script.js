const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked"
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
function handleTitleClick() {
    h1.classList.toggle("clicked")
}
 //NOW, we are operating JS and Css in the right way with less codes.
 //But, there are still some of points that we can improve.

 //❗️Cleaning Code❗️
 //❗️point01. String "clicked" is using twice. (or more depends on case)
 // we better save "clicked" in variable to prevent error.
 
 //❗️point02. Bug
 // What if we already have className on elements before we update from JavaScript??
 // We have to add old className to variable every single time if we want to add className from HTML.
 // ex) const clickedClass = "active sexy-font"

    h1.addEventListener("click", handleTitleClick);

