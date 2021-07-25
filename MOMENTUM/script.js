//이전 강의 에서는
//console.log()와 player.points 의 형태를 만들어 보았다.
//그런데 log에는 ()가 붙고 player.points에는 ()가 붙지 않는다.
//→ console.log는 function 이지만, player.point는 숫자이기 때문.

//What is function??
//계속해서 반복하여 사용할 수 있는 코드 조각.
//어떤 코드를 캡슐화 하여 실행을 여러 번 할 수 있게 해준다.

//어떤 이름을 주던 Hello를 해주는 function을 만들어 보자.
function sayHello(){
    console.log("hello my name is C");
}
// hello my name is 뒤에 A, B, C와 같이 다양한 값을 주어 실행시키고 싶다.
// Argument(인수)를 보내야함.
//ex) 
alert("hello");

// 그렇다면 hello my name is 뒤에 C 대신에 nico, dal, lynn 이 오게하려면 어떻게하나?
sayHello("nico");
sayHello("dal");
sayHello("lynn");
// 만으로는 부족하다. Than HOW??
// Let's see in next lecture!