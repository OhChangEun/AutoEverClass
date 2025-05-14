// for (let i = 1; i < 10; i++) {
//   console.log(`2 * ${i} = ${2 * i}`);
// }

// const num = Number(prompt("숫자 입력 : "));

// if (num >= 0) {
//   console.log(`${num}은 양수입니다.`);
//   document.write("<h1>양수 입니다.</h1>");
// } else {
//   console.log(`${num}은 음수입니다.`);
//   document.write("<h1>음수 입니다.</h1>");
// }

// const PI = 3.14;
// console.log(PI * 20);

// prompt 입력받기 : 자바스크립트는 기본적으로 웹기반의 언어이므로 콘솔 입력이 없음
const userName = prompt("이름을 입력하세요.");
// console.log(typeof userName);
const greetingTag = document.querySelector(".greeting");

if (userName) {
  greetingTag.innerText = userName + "님, 안녕하세요.";
} else {
  greetingTag.innerText = "이름 미입력";
}
