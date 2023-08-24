// this
// this는 실행 컨택스트가 생성될 때 결정된다.

// 자바스크립트에는 런타임 환경이 2가지가 있다.
// 1. node-js
// 2. 브라우저

// 브라우저에서는 this가 window 를 가리킴
// (브라우저 환경 console.log에서 해볼 것)
// console.log(this);
// this === window // true

// node 환경에서는 this가 global을 가리킴
// (node 환경에서 console.log 해볼 것)
// this === global // true

// 함수는 호출 주체가 없이 그 자체로 독립적인 기능을 수행한다.
// 실행 컨택스트가 활성화될 당시에 this가 지정되지 않은 경우 this는 전역 객체를 가리킨다.
// this -> 전역 객체

function func(x) {
  console.log(this);
}

// func(1); // node 환경에선 global, 브라우저 환경에선 window

//  메서드는 자신을 호출한 대상의 객체에 대한 동작을 수행한다.
// this -> 호출의 주체
// 함수와 메서드로서의 호출 구분 기준 = . []
var obj = { method: func };

obj.method(2); // method

// 메서드 내부 함수에서의 this 우회
