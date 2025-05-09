// 자바스크립트는 원시 타입을 제외한 모든 값이 객체
// 객체리터럴은 중괄호 {}로 생성, 속성과 값의 쌍으로 구성

// const person = {
//   title: "지구오락실",
//   name: "안유진",
//   age: 23,
//   job: "아이브",
// };

// console.log(person);

const member = {
  id: "oce3752",
  pwd: "1234567",
  addr: "대구 달서구",
  name: "오창은",
  func1: () => {
    console.log("객체 안 함수 호출입니다.");
  },
};

// console.log(member.func1()); // 함수 내 func1()의 반환값이 없기 때문에 undefined 출력
console.log(member);

// const members = [
//   {
//     id: "ive1",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "안유진",
//   },
//   {
//     id: "ive2",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "장원영",
//   },
//   {
//     id: "ive3",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "가을",
//   },
//   {
//     id: "ive4",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "레이",
//   },
//   {
//     id: "ive5",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "리즈",
//   },
//   {
//     id: "aespa1",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "카리나",
//   },
//   {
//     id: "aespa2",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "윈터",
//   },
//   {
//     id: "aespa3",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "지젤",
//   },
//   {
//     id: "aespa4",
//     pwd: "1234",
//     addr: { home: "경기도 수원시", company: "서울시 금천구 가산동" },
//     name: "닝닝",
//   },
// ];

// // for (let member of members) {
// //   console.log(member);
// // }

// members.map((member) => {
//   console.log("아이디 : " + member.id);
//   console.log("비밀번호 : " + member.pwd);
//   console.log("주소 : " + member.addr.home);
//   console.log("이름 : " + member.name);
//   console.log("-----------------------");
// });
