// Set
// 고유한 값을 저장하는 자료구조이다.
// value(값)만 저장한다. , key를 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.

// 값 추가, 삭제, 검색, 모든 값 제거, 존재 여부 확인

// 선언
const mySet = new Set();

// 추가
mySet.add('value1');
mySet.add('value2');
mySet.add('value2');
mySet.add('value3');

// 삭제
mySet.delete('value3');

// 전부 삭제
// mySet.clear();

// Set의 인덱스 크기
console.log(mySet.size);

// 존재 여부 확인
console.log(mySet.has('value1'));

// Iterator
for (const value of mySet.values()) {
  console.log(value);
}

console.log(mySet);
