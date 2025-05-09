// // 반복문 : 조건이 참인 동안 반복 수행하는 구문
// // for : for(초기값; 최종값; 증감값), 끝을 알 수 있을 때
// // JS에서는 for ..in(키값 순회) || for ..of(이터러블 객체 반복)
// const person = { name: "Alice", age: 25 };
// for (let key in person) {
//   console.log(key); // name, age
//   console.log(person[key]); // Alice, 25
// }

// const arr = ["a", "b", "c"];
// for (let value of arr) {
//   console.log(value); // "a", "b", "c"
// }

// // const result = document.querySelector(".result");
// // while, do ~ while
// // *** 자바에서는 while 조건문이 1이 아닌 true가 나와야 함 ***
// // while (num) > while (num > 0) 이렇게 바꿔야 함.
// let sum = 0;
// while (num) {
//   sum += num;
//   num--;
// }

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }

// // while 문 사용 예 : 반복 횟수를 알 수 없을 때
// const prompt = require("prompt-sync")();
// let age = 0;
// // 무한 반복문, 반드시 탈출 조건 필요
// while (true) {
//   age = Number(prompt("나이를 입력하세요: "));
//   if (age >= 0 && age <= 200) break;
//   console.log("나이를 잘못 입력하셨습니다.");
// }
// console.log(`당신의 나이는 ${age}살 입니다.`);

// // for 문
const cars = ["테슬라 모델 y", "제네시스 G80", "그랜저", "싼타페", "코나"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for .. of : 이터러블 순회 방식
for (let car of cars) {
  car += "0000"; // 원본 데이터를 바꾸지 않는다.
  console.log(car);
}
for (let car of cars) {
  console.log(car);
}

// for .. in : 객체의 키값 기준 순회
const person = { name: "안유진", age: 23, isAdult: true };

for (const key in person) {
  console.log(person[key]);
}
