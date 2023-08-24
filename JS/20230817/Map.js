// Map
// 자바스크립트에서는 객체, 배열을 사용하여 엄청나게 많고 다양하고 복잡한 프로그래밍을 만들어왔다.
// Map, Set의 목적 : 대이터의 구성, 검색, 사용을 효율적으로 처리한다 -> 기존의 객체 또는 배열보다

// Map은 key와 value를 저장하는 객체와 형태가 비슷하다.
// 객체는 key에 무조건 문자열 형태가 들어와야하지만 Map은 key에 어떤 유형이든 다 들어올 수 있다.

// Map은 key가 정렬된 순서로 저장되기 때문이다.

// - 기능
// 검색
// 삭제
// 제거
// 여부 확인

// 선언
const myMap = new Map();

// 할당
myMap.set('key', 'value');
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set(3, 'three');
myMap.set(4, 'four');

// 검색
console.log(myMap.get('key'));

// 반복을 위한 method : keys, values, entries
// key만 출력
console.log(myMap.keys());
for (const key of myMap.keys()) {
  console.log(key);
}

// value만 출력
console.log(myMap.values());
for (const value of myMap.values()) {
  console.log(value);
}

// key, value 모두 출력
console.log(myMap.entries());
for (const entry of myMap.entries()) {
  console.log(entry);
}

// 인덱스 크기
console.log(myMap.size);

// 키 기반 검색
console.log(myMap.has('two'));
