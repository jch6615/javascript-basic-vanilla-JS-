// magic-line
// Console에 메세지를 보내는 magic-line
// console.log(); 괄호안의 값이 console로 보내진다. (숫자, 문자 상관없음)

// create variable
// 1. const = constant 변화지 않는 값.
// 2. let
// const 와 let 의 차이??
// const 는 변경 절대 불가능. 이후에 변경하려고 하면 에러문구가 나온다.
// let 은 정의 이후에 변경가능.
// 변수를 update 하는 경우는 많지 않기 때문에 default로 const를 사용하고 필요에 따라 let 을 사용하자.
const a = 10;
const b = 2;
let myName = "nico";

// Variable의 이름을 정하는 규칙. 요령.
// 1. variable의 이름에는 공백이 들어갈 수 없다.
// 2. 여러 단어를 붙어 이름을 만들때는 camel case를 이용한다.
// ex) veryLongVariableName

// tips) Python 에서는 camel case가 아니라 단어마다 _를 넣는다.
// ex) very_long_variable_name

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "Paul";

console.log("your new name is " + myName);