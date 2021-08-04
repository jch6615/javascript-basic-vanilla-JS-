//Nullish coalesching operator

//❌ Bad Code 💩
function printMessage(text) {
    let message = text;
    if (text == null || text == undefiend) {
        message = 'Nothing to display 😛';
    }
    console.log(message);
}

//✅ Good Code ✨
function printMessage(text) {
    const message = text ?? 'Nothing to display 😛';
    console.log(message);
}

/* ✅ Nullish coalesching operator ✨
leftExpr ?? rightExpr
const message = text ?? 'Nothing to display 😛';
⬇️
물음표 왼쪽이 null이거나 undefined 인경우에만 오른쪽 코드가 기동됨.
text를 입력하면 text가 나오고
undefined 나 null 이면 Nothing to display 😛.
*/

// leftExpr ?? rightExpr 
const result = getInitilaState() ?? fetchFromServer();
console.log(result);
// 함수를 실행해서 왼쪽 함수의 값이 null or undefined 이라면 오른쪽 함수가 실행되고 결과값이 할당됨.

//🚨 Logical OR opratopr ||
function printMessage(text) {
    const message = text || 'Nothing to display 😛';
    console.log(message);
}

/* ✅ Logical OR operator ✨
leftExpr || rightExpr
왼쪽 코드가 falsy 인 경우에만 오른쪽이 기동됨.

🚨 Nullish coalescing 은 null 이나 undefined 일때
🚨 Logical OR opratopr 은 falsy (거짓)일때
✨ falsy 에는... undefined, null, boolean false, 0, -0, NaN, "" & '' & `` 빈문자열
*/

// 🚨 Default parameter is only for undefined
function printMessage (text = 'Nothing to display 😛') {
    console.log(text);
}
/* Default parameter
text = 'Nothing to display 😛'라는 default value를 입력.
text 값을 지정하지 않는다면 Nothing to display 😛 이 자동적으로 값으로 된다.
⬇️
'hello' → hello
undefined → Nothing to display 😛 
null → null.
*/