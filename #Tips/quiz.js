// Remove Duplicates!
const array = ['🐶', '🐱', '🐕', '🐶', '🐕', '🐱'];
console.log(array);

console.log([...new Set(array)]);
//Array는 중복을 허용한다.
//하지만, Set이라는 자료구조는 중복을 허용하지 않는다.
//spread syntax로 하나씩 풀어서 새로운 배열로 만들어줌.