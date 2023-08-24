var x1 = 30;
var y1 = 40;

console.log(x1 + y2);

/** 연산
 *  산술 연산자(+, -, /, *, **, %)
 *  할당 연산자(=, +=, -=, *=, **=, %=)
 *  논리 연산자(&& = (and/true), || = (or/false), !, !!, &, |)
 *  비교 연산자(>, >=, <, <=, ==, !=, ===, !==)
 *  nullish 병합 연산자(??)
 */

result1 = 10 | 100; // true
result2 = 0 && 100; // false
result3 = null || 100;
result4 = null && 100;

username = 'bmc';
result5 = username || '유저 이름이 없습니다';

username = undefined;
result5 = username || '유저 이름이 없습니다';

let result1;
let result2 = result1 ?? 100; // 앞의 값이 없으니 100

let result3 = 10;
let result4 = result3 ?? 100; // 앞의 값이 있으니 10

let result5 = null;
let result6 = result5 ?? 100;

// typeof 연산자
typeof 10;
typeof '10';

/** 프로퍼티 접근 연산자
 * 1. 마침표 프로퍼티 접근 연산자
 * 2. 대괄호 프로퍼티 접근 연산자
 */
let x = { one: 1, two: 2 };
x.one; // 마침표 프로퍼티 접근 연산자
x['one']; // 대괄호 프로퍼티 접근 연산자

// 관계 연산자
// - 키만 가지고 판단
10 in [10, 20, 30]; // false (앞의 값 key만 판별)
1 in [10, 20, 30]; // true key 1이 있음
1 in 'hello'; // error
'name' in { name: 'bmc' }; // true
'length' in [10, 20, 30]; // true 객체안에 length가 존재

/** 변수의 형
 * 변수(타입, typeof로 확인 가능)
 * 원시타입(primitive types) : number, string, boolean, null, undefind, symbol
 * 참조타입(reference types) : obejct(object, array, map, set), function
 * Number(숫자)
 * - 형태 : 10, 10.123, -10
 * - 메서드 :
 *      1. 10.toString()은 불가능 (소수점 때문)
 *      2. (10).toString()와 변수명.toString은 가능
 *      3. num.toFixed()
 * Number()
 * parseInt() - 권고, parseFloat()
 *
 */

/**Math
 * Math.PI 원주율
 * Math.max() 최대값
 * Math.min() 최소값
 * Math.floor(
 * Math.round()
 * Math.random()
 * Math.abs()
 * Math.sqrt()
 * Math.pow()
 *
 */

/** String(문자열)
 * 형태 : 'abc',`adc`, `abc${변수명}`
 * 호출 : 변수명, 변수명[0]
 * 메서드 :
 * str.length()
 * str.indexOf()
 * str.lastIndexOf()
 * str.includes()
 * str.slice()
 * str.split() *
 * str.substring()
 * str.substr()
 * str.toLowerCase()
 * str.toUpperCase()
 * str.trim()
 * str.replace() *
 * str.concat()
 * str.repeat()
 *
 */

/** Boolean (논리값) *
 * 형태 : true, false
 * 호출 : 변수명
 * 어떤 것이 true이고 어떤 것이 false인지 판단할 수 있어야함
 */

// undefined : undefiend
//  형태 : let a, console.log(a)

// null : object
//  형태 : let a = null

let x3 = true; // undefined
!![]; // true
!!{}; // true
!!''; // false
!!'hello'; // true
!!0; // false
!!10; // true
!!-10; // true
let x4; // undefined
x4; // undefined
x4 = null; // null

// Array(배열): object
//  형태 :
['하나', '둘', '셋']; // 1차원 배열
[100, 200, 300]; // 2차원 배열
[
  { one: 1, two: 2 }, // 객체
  { one: 10, two: 20 },
];
let x5 = [
  // 3차원 배열
  [
    [1, 2],
    [10, 20],
    [100, 200],
  ],
  [
    [3, 4],
    [30, 40],
    [300, 400],
  ],
];

/** Array 메서드
 * length
 * forEach
 * map
 * filter
 * push / pop - mutable
 * slice - immutable
 * splice - mutable
 * reduce - immutable
 * join
 * indexOf
 * includes
 * find
 * concat
 * every
 * some
 * fill - mutable
 * shift - mutable
 * unshift - mutable
 * reverse - mutable
 * sort - mutable
 */
Array(100).fill(0); // *
Array(100).fill('hello');
Array(100).fill('hello'.repeat(2));
Array(100)
  .fill(0)
  .map((value, index) => value + index);

/** Object 메서드 *
 * Object.keys
 * Object.values
 * Object.entries
 */

// Map : object *
//  메서드 : set, get, has, delete, size
let map = new Map();
map.set('one', 100);
map.set('two', 200);
map.set('three', 300);
map.set('four', [10, 20]);
map.set(5, [100, 200]);
map.set([1, 2], [100, 200]);
map.get(5);

let human = { name: 'bmc', age: 29, local: 'daegu' };

let bmc = new Map(Obejct.entries(human));

/** Set : object *
 * 메서드 : add, delete, has, size
 * 중복을 허락하지 않음
 * 합집합, 교집합, 차집합 등에 대한 메서드가 있진 않지만
 * 이러한 합집합, 교집합, 차집합 등을 구현하기 위해 Set을 많이 사용
 */

let set = new Set('1112223333333');
set.add(1);
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
set.size;

/** 함수
 * function sum(x,y) , sum(3,5)
 * 매개변수(파라미터,parameter) : x,y
 * 전달인자(아규먼트,argument) : 3,5
 * 함수 사용 이유
 *  1. 재사용성
 *  2. 아키텍처 파악
 *  3. 유지보수 용이
 */

/** 화살표 함수
 * 장점 : 네이밍 안해도 됨, 다른 곳에서 사용 불가능
 * 단점 : 콜백지옥에 빠질 수 있음
 */

/** 클래스
 * 클래스 - 붕어빵 찍는 틀, 공장
 * 인스턴스 - 붕어빵, 제품
 */

class Notice {
  constructor(title, contents, author) {
    this.title = title;
    this.contents = contents;
    this.author = author;
  }
  수정하기(title, contents, author) {
    this.title = title;
    this.contents = contents;
    this.author = author;
  }
}

dataBase = [];
게시물1 = new Notice('제목1', '내용1', '저자1');
dataBase.push(게시물1);
게시물2 = new Notice('제목2', '내용2', '저자2');
dataBase.push(게시물2);
게시물3 = new Notice('제목3', '내용3', '저자3');
dataBase.push(게시물3);

dataBase.forEach((data) => {
  제목 = document.createElement('h1');
  제목.textContent = data.title;
  내용 = document.createElement('p');
  내용.textContent = data.contents;
  저자 = document.createElement('span');
  저자.textContent = data.author;
  document.body.append(제목);
  document.body.append(내용);
  document.body.append(저자);
});

class Human {
  constructor() {
    // 인스턴스 메서드, 인스턴드 프로퍼티 메서드, 프로토타입 메서드
  }
  a() {
    // 클래스 메서드, 클래스 프로퍼티 메서드, 정적 메서드
  }
  static b() {}
}

bmc = new Human('병민');
typeof bmc; // object
typeof Human; // function

// getter - 획득
// setter - 설정
// # = private 필드

class Student {
  subject = 'javascript study';
  #level;
  constructor(level, name, skill) {
    this.#level = level;
    this.name = name;
    this.skill = skill;
  }
  set level(level) {
    // hojun.level = 10
    this.#level = level;
  }
  attack() {
    console.log('공격!');
  }
}

// 상속
class Mento extends Student {
  codeReview() {
    console.log('코드리뷰 진행');
  }
}

let bmc2 = new Student(999, '병민', ['javascript', '...생략']);

// 예외처리
try {
  // 성공
  console.log('success');
  // 코드
} catch (error) {
  console.log('error', error);
  // 실패
  //코드
} finally {
  console.log('finally');
  // 무조건 마지막에 실행
  //코드
}

// 전개구문 사용
function f(...x) {
  return x;
}
f(1, 2, 3, 4, 5);

// 동기와 비동기
function 덧셈(a, b, 콜백함수) {
  setTime;
}
