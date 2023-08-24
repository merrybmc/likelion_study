// window.alert('안녕하세요!!');

let text1 = 'aa bb cc dd';
let text2 = 'aa-bb-cc-dd';
let text3 = 'aa,bb,cc,dd';
let text4 = 'aa,bb-cc-dd';

let arr1 = text1.split(' ');
let arr2 = text2.split('-');
let arr3 = text3.split(',');
let arr4 = text4.replaceAll('-', ',').split(',');

console.log(arr1);
console.log(arr2);
console.log(arr3);
