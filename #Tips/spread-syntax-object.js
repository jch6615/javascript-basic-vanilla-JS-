//Spread Syntax - Object
const item = { type: '๐', size: 'M' };
const detail  = { price: 20, made: 'Korea', gender: 'M' };
/*
๋๊ฐ์ object๋ฅผ ํฉ์น๊ณ  ์ถ์ผ๋ฉด??
*/

//โ Bad Code ๐ฉ
item['price'] = detail.price; 
//๊ธฐ์กด์๋ ์๋์ ์ผ๋ก ์๋ ฅํ์๋ค.
//๐จ BUT ๊ธฐ์กด์ ์กด์ฌํ๋ Object๋ฅผ ๋ณ๊ฒฝํ๋ ๊ฒ์ ์ข์ง ์๋ค.

//โ Bad Code ๐ฉ
const newObject = new Object();
newObject['type'] = item.type;
newObject['price'] = detail.price; 

//โ Bad Code ๐ฉ
const newObject2 = {
    type: item.type,
    price: detail.price,
}

//โ Good Code โจ
const Shirt = Object.assign(item, detail);
//Object.assign(object1, object2);

//โ Good Code โจ Spread Syntax
const shirt0 = { ...item, ...detail, price='40'};
//์ค๊ดํธ๋ก ์๋ก์ด object๋ฅผ ๋ง๋ค๊ณ 
//...(spread syntax)๋ฅผ ์ฌ์ฉํ์ฌ item, detail์ ์์๋๋ก ๊ฐ์ ธ์จ๋ค.
// ๋ฎ์ด ์์ฐ๊ณ  ์ถ๋ค๋ฉด ๋ค์ ์ด์ด์ฐ๋ฉด ๋จ.

//โ Spread Syntax ๋ Array์๋ ์ฌ์ฉ๊ฐ๋ฅํ๋ค.
let fruits = ['๐', '๐', '๐'];


//โ fruit.push('๐');
//โ ๊ธฐ์กด์ ๋ฐฐ์ด์ ์์ ํ์ง ์๊ณ  ์๋ก์ด ๋ฐฐ์ด ์์ฑ
fruits = [...fruits, '๐'];

//โfruits.unshift('๐');
//โ ์์ ์ถ๊ฐํ๋๊ฒ๋ ๊ฐ๋ฅ.
fruits = ['๐', ...fruits];

const fruits2 = ['๐', '๐', '๐'];
//๋๊ฐ์ ๋ฐฐ์ด์ ํฉ์น ๋
let combined = fruits.concat(fruits2);

combined = [...fruits, '๐', ...fruits2];