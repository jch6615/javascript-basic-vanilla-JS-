//Teplate Literals (Template String)
const person = {
    name: 'Julia',
    score: 4,
};

//❌ Bad Code 💩
console.log(
    'Hello' + person.name + 'Your current score is: ' + person.score 
)

//✅ Good Code ✨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`)

//Template Literals & object destructuring
//✅ Good Code ✨
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`)

//Template Literals & object destructuring
//✅ Good Code ✨ 
function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}
//재사용 할 수 있도록 함수화.
//여러군데에서 사용하게되서 수정을 하고 싶으면 여기만 수정하면됨.