// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
/*
https://codesandbox.io/s/day-three-blueprint-forked-veftc?file=/index.html
*/
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = "#1abc9c";
  },

  handleMouseLeave: function () {
    h2.innerText = "The mouse is Gone!";
    h2.style.color = "#3498db";
  },

  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = "#9b59b6";
  },

  handleMouseRightClick: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = "#e74c3c";
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);