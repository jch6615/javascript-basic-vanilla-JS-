const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const btn = document.querySelector("button");

// function colorList() {
//     if (! list){
//         var list = [];
//     }
//     const color = colors[Math.floor(Math.random() * colors.length)];
    
//     if (list.length < 3 && list.indexOf(color) < 0) {
//         list.push(color);
//         return colorList();
//     } else {
//         return list;
//     }
// }
//colorList()[0];
//colorList()[1];
  function changeBackground() {
    const list = [];
    for (let i = 0; i < 3; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        if(list.indexOf(color) < 0){
            list.push(color);
        } 
    }
    document.body.style.background = `linear-gradient(0.25turn, ${list[0]}, ${list[1]}, ${list[2]})`;
  }

  btn.addEventListener("click", changeBackground);
