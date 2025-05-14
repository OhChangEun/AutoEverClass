const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const obj1 = { name: "장원영", age: 22 };
const obj2 = { addr: "서울시 강남구", position: "센터" };
const obj3 = { ...obj1, ...obj2, name: "안유진" };

console.log(obj3);

// 가변변수 만들기
const sum = (...numbers) => {
  return numbers.reduce((sum, acc) => sum + acc, 0);
};

console.log(sum(1, 3, 5, 7, 9, 11));

// ...numbers는 **Rest 파라미터(Rest parameter)**입니다.
// sum(1, 3, 5, 7, 9, 11) 이렇게 여러 개의 인자를 넘기면
// ...numbers가 이것들을 하나의 배열로 자동으로 모아줍니다

// 즉, 내부적으로는:
// numbers === [1, 3, 5, 7, 9, 11] // 이렇게 동작
