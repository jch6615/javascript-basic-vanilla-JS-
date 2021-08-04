//Object Destucturing
const person = {
    name: 'paul',
    age: 26,
    phone: '080000000',
};


//❌ Bad Code 💩
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

//❌ Bad Code 💩
function displayPerson(person) {
    const name = person.name;
    const age = person.age;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}

//✅ Good Code ✨
function displayPerson(person) {
    const {name, age} = person;
    //person 이라는 object 안에 있는 name과 age를 할당
    //person에 있는 key 와 동일한 이름으로 할당을하면, 자동적으로 person object안의 값을 불러온다.
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}