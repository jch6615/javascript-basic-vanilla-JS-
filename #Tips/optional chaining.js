//Optianl Chaining
const bob = {
    name = 'Julia',
    age = 20,
};
const anna = {
    name: 'Julia',
    age: 20,
    job: {
        title: 'Software Engineer',
    },
};

//❌ Bad Code 💩
function displayJobTitle(person) {
    if(person.job && person.job.title) {
        console.log(person.job.title);
    }
};
//person.job이 있고, person.job.title이 있다면... 기동

//이렇게 값이 있을수도 없을 수도 있을 경우, 
//✅ Good Code ✨
function displayJobTitle(person) {
    if(person.job?.title) {
        console.log(person.job.title);
    }
};
//person.job이 있다면 그 Job안에 title이 있는지 없는지 검사된다.
//job이 false가 되면 실행되지 않는다.

//Optional chaining & nullish-coalescing
//✅ Good Code ✨
function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet 🔥';
    console.log(title);
}
//person.job이 있다면 그 Job안에 title이 있는지 없는지 검사된다.
//만약 job이 있더라도 title이 없으면 'No Job Yet 🔥' 표시.