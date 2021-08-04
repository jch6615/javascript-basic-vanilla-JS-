//Spread Syntax - Object
const item = { type: '👔', size: 'M' };
const detail  = { price: 20, made: 'Korea', gender: 'M' };
/*
두개의 object를 합치고 싶으면??
*/

//❌ Bad Code 💩
item['price'] = detail.price; 
//기존에는 수동적으로 입력하였다.
//🚨 BUT 기존에 존재하는 Object를 변경하는 것은 좋지 않다.

//❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['price'] = detail.price; 

//❌ Bad Code 💩
const newObject2 = {
    type: item.type,
    price: detail.price,
}

//✅ Good Code ✨
const Shirt = Object.assign(item, detail);
//Object.assign(object1, object2);

//✅ Good Code ✨ Spread Syntax
const shirt0 = { ...item, ...detail, price='40'};
//중괄호로 새로운 object를 만들고
//...(spread syntax)를 사용하여 item, detail을 순서대로 가져온다.
// 덮어 씌우고 싶다면 뒤에 이어쓰면 됨.

//✅ Spread Syntax 는 Array에도 사용가능하다.
let fruits = ['🍉', '🍋', '🍌'];


//❌ fruit.push('🍓');
//✅ 기존의 배열을 수정하지 않고 새로운 배열 생성
fruits = [...fruits, '🍓'];

//❌fruits.unshift('🍇');
//✅ 앞에 추가하는것도 가능.
fruits = ['🍇', ...fruits];

const fruits2 = ['🍈', '🍑', '🍍'];
//두개의 배열을 합칠때
let combined = fruits.concat(fruits2);

combined = [...fruits, '🍒', ...fruits2];