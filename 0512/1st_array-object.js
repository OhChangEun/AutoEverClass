// foreEach() : ES5에서 도입, 배열에서 각 요소에 대한 반복 수행 (단순 반복)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers[1] = 100; // 주소가 바뀌는게 아니고, 내용이 바뀌는 것이기 때문에 바뀔 수 있음(객체라서)
console.log(numbers);

numbers.forEach((num) => {
  console.log(num);
});

// map() : ES5에서 도입, 배열의 각 요소를 "변형" => 새로운 배열을 만듦. 자주 쓰임!!
const doubled = numbers.map((num) => num * 2);
doubled.forEach((doubledNum) => {
  console.log(doubledNum);
});

// filter() : ES5에서 도입, 조건에 맞는 요소만 "추출" => 새로운 배열 생성
const even = numbers.filter((num) => num % 2 == 0);
console.log(even);

// reduce() : ES6에서 도입, 누적합이나 곱을 구할 때 사용
// arr.reduce(callback, initialValue);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 누적합(곱)인 acc에 curr 값을 계속 더해준다는 느낌으로 이해하기.

// -callback: 누적 작업을 수행하는 함수. 이 함수는 4개의 인자를 가짐:
// accumulator: 누적된 결과
// currentValue: 현재 요소
// currentIndex (선택)
// array (선택)

// -initialValue: accumulator의 초기값
