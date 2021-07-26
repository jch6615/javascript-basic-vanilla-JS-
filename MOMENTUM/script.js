function sayHello(nameOfPerson){
    console.log(nameOfPerson);
}

sayHello("nico");
sayHello("dal");
sayHello("lynn");

//데이터를 받는 방법은 함수의 괄호안에 인수를 부여하는것. 이름이나 변수나 상관없음
//sayHello로 데이터를 보내면 nameOfPerson 이라는 변수로 보내져 사용하게 됨.
//함수의 argument는 하나일 필요는 없음.

function sayHalo(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHalo("nico", 10);
sayHalo("dal", 23);
sayHalo("lynn", 21);

function plus (a,b){ //a와 b, 즉 변수명은 뭐가 되던 상관 없다.
    console.log(a + b);
}

plus();
//argument를 넣지 않고 실행하면 nan이 됨. Not A Number.

function divide(a,b) {
    console.log(a/b);
}
divide(98,20);

//player Object를 만들어보자
const player = {
    name: "nico",
    sayHelloo: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    },
};

console.log(player.name);
player.sayHelloo("lynn");