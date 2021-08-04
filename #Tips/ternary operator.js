//Ternary Operator

//❌ Bad Code 💩
function getResult (score) {
    let result;
    if (score > 5) {
        result = '👍';
    } else if (score <= 5) {
        result = '👎';
    }
    return result;
}

//✅ Good Code ✨
function getResult (score) {
    return score > 5 ? '👍' : '👎';
    // let result;
    // if (score > 5) {
    //     result = '👍';
    // } else {
    //     result = '👎';
    // }
    // return result;
}
/*
✅ POINT 1
조건이 2가지인 경우에는 else if 가 필요없다.
✅ POINT 2


*/
