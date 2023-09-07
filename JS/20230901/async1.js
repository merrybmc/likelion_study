// 자바스크립트는 코드를 순차적으로 실행
// console.log(1);
// console.log(2);
// [3, 4, 5].forEach((i) => console.log(i));
// console.log(6);

console.log(1);
setTimeout(() => {
  console.log(2);
}, 100);
console.log(3);
