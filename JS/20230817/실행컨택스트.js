// 실행 컨택스트

// 실행할 코드에 환경 정보들을 모아놓은 객체이다.
// 코드의 실행 순서와 스코프를 기억한다.
// 자바스크립트는 어떤 실행 컨택스트가 활성화되는 시점에 다음과 같은 일들을 한다.
// 1. 선언한 변수를 위로 끌어올린다. (호이스팅)
// 2. 외부 환경 정보를 구성한다.
// 3. this 값(this 바인딩)을 설정한다.

// 콜스택

// Stack
// stack = last in, first out
// queue = first in, first out

// 실행할 코드에 제공할 환경 정보들을 모아놓은 객체를 실행할 때 필요한 환경 정보드을 모아
// 컨택스트를 구성하고 스택의 한 종류인 콜스택에 쌓아올린다.
// 가장 위에 쌓여있는 컨택스트와 관련된 코드를 실행하는 방법으로 코드의 환경 및 순서를 보장 가능하다.

// 컨택스트의 구성
// 1. 전역 공간
// 2. eval() 함수
// 3. 함수

let a = 1;
function outer() {
  function inner() {
    console.log(a); // undefined
    let a = 3;
  }
  inner();
  console.log(a); // 1
}
outer();
console.log(a); // 1

// 콜 스택에 쌓이는 실행 컨택스트에 의해 순서가 보장된다.
// 순서 -> 코드 실행 -> 전역(in) -> 전역(중단) -> outer(in) -> ->outer(중단) -> inner(in) -> inner(out) -> outer(재개) -> outer(out) -> 전역(재개) ->(out) -> 코드종료

// 결국은 특정 실행 컨택스트가 활성화되는 시점이 콜스택의 맨 위에 쌓이는 순간을 의미한다.
// 곧, 현재 실행할 코드에 해당 실행 컨택스트가 관여하게 되는 시점을 의미한다.

// 실행 컨택스트 객체의 실체
// 1. VariableEnvironment (변경 사항을 실시간으로 반영하지 않는다. = snapshot이라고도 한다.)
//  1-1. 현재 컨택스트 내의 식별자 정보(environmentRecord,=record)를 가지고 있다.
var a = 3; // let a = 식별자, 3 = 변수
//  1-2. 외부 환경 정보(outer)를 가지고 있다.
//  1-3. 선언 시점 LexicalEnvironment의 snapshot
// 2. LexicalEnvironment
//  2-1. VariableEnvironment와 동일하지만 변경사항을 실시간으로 반영한다.
// 3. ThisBinding
//  3-1. this 식별자가 바라봐야하는 객체

// environmentRecord
// 실행 컨택스트와 관련된 코드의 식별자 정보들이 수집된다. (호이스팅)
// 수집 대상 정보 : 함수, 함수에 지정된 매개변수 식별자, var로 선언된 식별자
// 컨택스트 내부를 처음부터 끝까지 순서대로 수집
// 순서대로 수집만 하고 코드를 실행하지는 않는다.

// 호이스팅
// 식별자 정보 수집을 모두 마쳤더라도 아직 실행 컨택스트가 관여할 코드들은 실행 전의 상태이다.

// 호이스팅 규칙 (호이스팅 뜻 = 끌어올리다.)
// 1. 매개변수 및 변수는 선언부를 호이스팅한다.

// 호이스팅 적용 전
function a() {
  var x = 1;
  console.log(x);
  var x;
  var x = 2;
  console.log(x);
}

// 호이스팅 적용 후
function a() {
  var x;
  var x;
  var x;

  x = 1;
  console.log(x);
  console.log(x);
  x = 2;
  console.log(x);
}

// 2. 함수 선언 전체를 호이스팅한다.
// 주의사항 : 함수 선언문은 함수 전체를 호이스팅하지만 함수 표현식은 식별자만 호이스팅한다.

// 호이스팅 적용 전
function a() {
  console.log(b);
  var b = 1;
  console.log(b);
  function b() {}
  console.log(b);
}

// 호이스팅 적용 후
function a() {
  var b;
  function b() {}
  console.log(b);
  b = 1;
  console.log(b);
  console.log(b);
}

// 스코프 Scope
// 변수를 참조할 수 있는 유효한 범위
// 식별자가 유효한 범위
// 변수가 선언된 위치에 따라 유효 범위가 결정된다.
// 변수명 충돌 방지, 메모리 절약

// 블럭 안의 변수는 블럭 안에서만 유효한다.
{ 
}

// 코드 블럭의 예시
// 1. if
if() {}

// 2. for
for() {}

// 3. function
function() {}

// 함수 외부에서는 함수 내부의 변수를 참조하지 못한다.