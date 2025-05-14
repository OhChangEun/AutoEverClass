// text() : 문자열에 패턴이 있는지 검사하고 결과를 true / false 반환
const regExp = /Hello/;
console.log(regExp.test("Hello World!!!!!")); // true

// // exec() : 문자열에서 패턴에 일치하는 첫 번째 결과를 반환, 잘 안씀
// const result = /가장+/.exec("가장 큰 실수는 포기입니다");
// console.log(result); // ["가장"]

// match() : 문자열에서 패턴에 일치하는 모든 결과를 배열로 반환
const phone = "010-1234-5678, 010-5006-4145, 020-7894-2223";
const regNum = phone.match(/\d{3}-\d{4}-\d{4}/g);
console.log(regNum);

// 쉡사이트 주소 찾기
// ?하면 뒤에 문자와도 되고 안와도 되고,
const regex = /https?:\/\/[\w\-\.]+/g;
const urls = "http://naver.com https://google.co.kr abcefghijklmnop";

console.log(urls.match(regex));
// 출력: ['http://naver.com', 'https://google.co.kr']

// 이메일 검사 하기
const regex_email = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regex_email.test("example.@gmail.co.kr")); // true

// 비밀번호: 대문자, 소문자, 숫자, 특수문자 2자, 길이는 8자리 이상 16자리 이하하
