const clock = document.querySelector("#clock");

//🌟 intervals & timeout 🌟
function sayHello() {
    console.log("hello");
}
//sayHello()를 2초마다 실행시켜보자.

/*
🌟 setInterval(a,b) 
setInterval은 두개의 argument를 가진다.
a: 실행하고 싶은 처리, 함수
b: 호출되는 function의 간격. 몇 ms(milliseconds)으로 할지.
*/
setInterval(sayHello, 5000); //5000ms === 5s 