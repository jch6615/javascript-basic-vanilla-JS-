//Ternary Operator

//โ Bad Code ๐ฉ
function getResult (score) {
    let result;
    if (score > 5) {
        result = '๐';
    } else if (score <= 5) {
        result = '๐';
    }
    return result;
}

//โ Good Code โจ
function getResult (score) {
    return score > 5 ? '๐' : '๐';
    // let result;
    // if (score > 5) {
    //     result = '๐';
    // } else {
    //     result = '๐';
    // }
    // return result;
}
/*
โ POINT 1
์กฐ๊ฑด์ด 2๊ฐ์ง์ธ ๊ฒฝ์ฐ์๋ else if ๊ฐ ํ์์๋ค.
โ POINT 2


*/
