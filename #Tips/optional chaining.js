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

//โ Bad Code ๐ฉ
function displayJobTitle(person) {
    if(person.job && person.job.title) {
        console.log(person.job.title);
    }
};
//person.job์ด ์๊ณ , person.job.title์ด ์๋ค๋ฉด... ๊ธฐ๋

//์ด๋ ๊ฒ ๊ฐ์ด ์์์๋ ์์ ์๋ ์์ ๊ฒฝ์ฐ, 
//โ Good Code โจ
function displayJobTitle(person) {
    if(person.job?.title) {
        console.log(person.job.title);
    }
};
//person.job์ด ์๋ค๋ฉด ๊ทธ Job์์ title์ด ์๋์ง ์๋์ง ๊ฒ์ฌ๋๋ค.
//job์ด false๊ฐ ๋๋ฉด ์คํ๋์ง ์๋๋ค.

//Optional chaining & nullish-coalescing
//โ Good Code โจ
function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet ๐ฅ';
    console.log(title);
}
//person.job์ด ์๋ค๋ฉด ๊ทธ Job์์ title์ด ์๋์ง ์๋์ง ๊ฒ์ฌ๋๋ค.
//๋ง์ฝ job์ด ์๋๋ผ๋ title์ด ์์ผ๋ฉด 'No Job Yet ๐ฅ' ํ์.