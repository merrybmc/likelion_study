// 클로저 Closures

// 함수와 그 외부를 둘러싸고 있는 lexical environment 의 조합이다.
// 내부 함수에서 외부 함수에 있는 상태에 접근할 수 있는 권한을 줄 수 있는 것
// 함수 내부 정보를 은닉하고 공개 함수를 통한 데이터 조작을 위해 쓰인다.
// 클래스의 private 필드 또는 메소드를 사용하는 효과와 동일하다.

// --------------------------------------------------------------

// 클로저의 특징
function outer() {
  const x = 1;
  function inner() {
    console.log(x); // 1 x는 outer에 있는 const x를 가리킨다.
    // 내부에 있는 함수는 하위 스코프에 접근할 수 있다.
  }
  inner();
}

const inner = outer();
// inner는 inner 함수를 가리킨다.

// --------------------------------------------------------------

// 활용 예
function makeCounter(x) {
  let count = x;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter(5);
increase(); // 6
increase(); // 7
increase(); // 8
