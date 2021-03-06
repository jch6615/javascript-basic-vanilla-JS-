//Teplate Literals (Template String)
const person = {
    name: 'Julia',
    score: 4,
};

//β Bad Code π©
console.log(
    'Hello' + person.name + 'Your current score is: ' + person.score 
)

//β Good Code β¨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`)

//Template Literals & object destructuring
//β Good Code β¨
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`)

//Template Literals & object destructuring
//β Good Code β¨ 
function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}
//μ¬μ¬μ© ν  μ μλλ‘ ν¨μν.
//μ¬λ¬κ΅°λ°μμ μ¬μ©νκ²λμ μμ μ νκ³  μΆμΌλ©΄ μ¬κΈ°λ§ μμ νλ©΄λ¨.