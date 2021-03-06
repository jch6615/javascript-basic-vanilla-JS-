//Nullish coalesching operator

//โ Bad Code ๐ฉ
function printMessage(text) {
    let message = text;
    if (text == null || text == undefiend) {
        message = 'Nothing to display ๐';
    }
    console.log(message);
}

//โ Good Code โจ
function printMessage(text) {
    const message = text ?? 'Nothing to display ๐';
    console.log(message);
}

/* โ Nullish coalesching operator โจ
leftExpr ?? rightExpr
const message = text ?? 'Nothing to display ๐';
โฌ๏ธ
๋ฌผ์ํ ์ผ์ชฝ์ด null์ด๊ฑฐ๋ undefined ์ธ๊ฒฝ์ฐ์๋ง ์ค๋ฅธ์ชฝ ์ฝ๋๊ฐ ๊ธฐ๋๋จ.
text๋ฅผ ์๋ ฅํ๋ฉด text๊ฐ ๋์ค๊ณ 
undefined ๋ null ์ด๋ฉด Nothing to display ๐.
*/

// leftExpr ?? rightExpr 
const result = getInitilaState() ?? fetchFromServer();
console.log(result);
// ํจ์๋ฅผ ์คํํด์ ์ผ์ชฝ ํจ์์ ๊ฐ์ด null or undefined ์ด๋ผ๋ฉด ์ค๋ฅธ์ชฝ ํจ์๊ฐ ์คํ๋๊ณ  ๊ฒฐ๊ณผ๊ฐ์ด ํ ๋น๋จ.

//๐จ Logical OR opratopr ||
function printMessage(text) {
    const message = text || 'Nothing to display ๐';
    console.log(message);
}

/* โ Logical OR operator โจ
leftExpr || rightExpr
์ผ์ชฝ ์ฝ๋๊ฐ falsy ์ธ ๊ฒฝ์ฐ์๋ง ์ค๋ฅธ์ชฝ์ด ๊ธฐ๋๋จ.

๐จ Nullish coalescing ์ null ์ด๋ undefined ์ผ๋
๐จ Logical OR opratopr ์ falsy (๊ฑฐ์ง)์ผ๋
โจ falsy ์๋... undefined, null, boolean false, 0, -0, NaN, "" & '' & `` ๋น๋ฌธ์์ด
*/

// ๐จ Default parameter is only for undefined
function printMessage (text = 'Nothing to display ๐') {
    console.log(text);
}
/* Default parameter
text = 'Nothing to display ๐'๋ผ๋ default value๋ฅผ ์๋ ฅ.
text ๊ฐ์ ์ง์ ํ์ง ์๋๋ค๋ฉด Nothing to display ๐ ์ด ์๋์ ์ผ๋ก ๊ฐ์ผ๋ก ๋๋ค.
โฌ๏ธ
'hello' โ hello
undefined โ Nothing to display ๐ 
null โ null.
*/