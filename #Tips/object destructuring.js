//Object Destucturing
const person = {
    name: 'paul',
    age: 26,
    phone: '080000000',
};


//โ Bad Code ๐ฉ
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

//โ Bad Code ๐ฉ
function displayPerson(person) {
    const name = person.name;
    const age = person.age;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}

//โ Good Code โจ
function displayPerson(person) {
    const {name, age} = person;
    //person ์ด๋ผ๋ object ์์ ์๋ name๊ณผ age๋ฅผ ํ ๋น
    //person์ ์๋ key ์ ๋์ผํ ์ด๋ฆ์ผ๋ก ํ ๋น์ํ๋ฉด, ์๋์ ์ผ๋ก person object์์ ๊ฐ์ ๋ถ๋ฌ์จ๋ค.
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}