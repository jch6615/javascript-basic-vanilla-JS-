//Looping
const items = [1, 2, 3, 4, 5, 6];
//짝수인 경우에 한에서 4를 곱한다음에 총합을 구한다.

//❌ Bad Code 💩
function getAllevens(items) {
    const result = [];
    for (let i = 0; i <items.length; i++) {
        if(items[i] % 2 === 0) {
            result.push(items[i]);
        }
    }
    return result;
};
//✅ 배열 API를 이용하면 간단하게 만들 수 있다.
function getAllevens(items) {
    return items.filter(num => num % 2 === 0);
}
//배열안을 돌아봐서 num % 2 === 0 인 친구들만 필터링한다.

function multiplyByFour(items) {
    const result = [];
    for (let i = 0; i <items.length; i++) {
        result.push(items[i] * 4);
    }
    return result;
};
//✅ 배열 API를 이용하면 간단하게 만들 수 있다.
function multiplyByFour(items) {
    return items.map(num => num * 4);    
}
//기존의 값을 다른 값으로 하나하나 바꿀때는 .map을 이용

function sumArray(items) {
    let sum = 0;
    for (let i = 0; i <items.length; i++) {
        sum += items[i];
    }
    return result;
};
//✅ 배열 API를 이용하면 간단하게 만들 수 있다.
function sumArray(items) {
    items.reduce((a,b) => a + b, 0);
}

//❌ Bad Code 💩
const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

//✅ Good Code ✨
//수정된 내용처럼 한줄로 알아보기 쉽게 표현 할 수 있다면, 굳이 함수화 할필요가 없다.
const evens = items.filter(num => num % 2 === 0);
const multiple = evens.map(num => num * 4); 
const sum = multiple.reduce((a,b) => a + b, 0);
console.log(sum);

//✅ Good Code ✨
const result = items
    .filter(num => num % 2 === 0)
    .map(num => num * 4)
    .reduce((a,b) => a + b, 0);
console.log(result);