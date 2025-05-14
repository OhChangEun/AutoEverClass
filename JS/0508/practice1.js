// 주민등록번호 입력: 010222-3164414
// 성별 :
// 나이 :
// 생년월일 :
// 문자열읠 인덱싱과 슬라이싱 사용 : slice(시작인덱스, 종료인덱스)
// new Date().getFullYear()
// 7번 인덱스가 1과 2이면 1900년대 출생 | 3과 4이면 2000년대 출생 | 1과 3이면 남성 | 2와 4면 여성

const socialSecurityNum = String(prompt("주민등록번호 입력: "));
const greetingTag = document.querySelector(".greeting");
const genderTag = document.querySelector(".gender");
const ageTag = document.querySelector(".age");
const birthTag = document.querySelector(".birth");

const yymmdd = socialSecurityNum.slice(0, 6);
const yy = yymmdd.slice(0, 2);
const mm = yymmdd.slice(2, 4);
const dd = yymmdd.slice(4, 6);
const id = socialSecurityNum.slice(7, 14);

if (socialSecurityNum) {
  greetingTag.innerText = yymmdd + "-" + id;
}

// 성별
if (id[0] == 1 || id[0] == 3) genderTag.innerText = "성별: 남성";
else if (id[0] == 2 || id[0] == 4) genderTag.innerText = "성별: 여성";

// 나이
let currYear = new Date().getFullYear();
let fullYear;
if (id[0] == 1 || id[0] == 2) fullYear = 1900 + parseInt(yy);
else if (id[0] == 3 || id[0] == 4) fullYear = 2000 + parseInt(yy);
ageTag.innerText = `나이: ${currYear - fullYear + 1}`;

// 생년월일
if (id[0] == 1 || id[0] == 2) birthTag.innerText = `19${yy}년 ${mm}월 ${dd}일`;
else if (id[0] == 3 || id[0] == 4)
  birthTag.innerText = `20${yy}년 ${mm}월 ${dd}일`;
