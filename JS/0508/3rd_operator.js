// 연산자 : 수학적인 계산을 위해 사용되건, 참과 거짓을 판별할 때 사용
// 1) 산술연산자 : +, -, *, /, %, **
// 2) 증감연산자 : ++, --
// 3) 대입연산자 : =, +=, -=, *=, /=, %=
// 4) 비교연산자 : ==, ===
// 5) 3항연산자
// 비트연산자
// 전개연산자

// 1) 산술 연산자
let a = 10;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(parseInt(a / b)); // 몫을 구하기 위해 정수로 형 변환
console.log(Math.floor(a / b)); // 소수점 이하를 날림

console.log(a % b);
console.log(a ** b);

// 2) 증감연산자
console.log(++a); // 11
console.log(a); // 11
console.log(a++); // 11, 선대입 후 증가
console.log(a);

// 3) 대입연산자
let c = 10;
console.log((c += 2)); // c = c + 2
console.log((c -= 2));
console.log((c *= 2));
console.log((c /= 2));
console.log((c %= 2));

// 4) 비교연산자
console.log(100 == "100"); // true, 값이 같기 때문에
console.log(100 === "100"); // false, 타입이 다르기 때문에
console.log(100 != "100"); // false
console.log(100 !== "100"); // true

// 5) 3항연산자 : 참과 거짓을 구분하는 간단한 조건식인데, 연산자 취급
// react 조건부 렌더링에서 사용할 수 있음
const age = 18;
console.log(`당신은 ${age > 19 ? "성인" : "미성년자"} 입니다.`);

// 형변환: 정해진 타입을 다른 타입으로 변경 하는 ㄱ럿
// 형변환은 묵시적 / 명시적 으로 나누어짐

// 묵시적
const rst = 100 + 3.14;
console.log(rst); // 103.14
console.log(10 + 10 + "10"); // 2010
console.log(100 + "3.14"); // 1003.14

// 명시적
console.log(100 + Number("3.14")); // 103.14

// 윤년 계산
// 1. 연도가 4로 나누어 떨어짐
// 2. 100으로 나누어 떨어지면 윤년이 아님
// 3. 400으로 나누어 떨어짐

const year = Number(prompt());
console.log(
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? "윤년" : "윤년아님"
);

// 주민등록번호 입력: 010222-3164414
// 성별 :
// 나이 :
// 생년월일 :
// 문자열읠 인덱싱과 슬라이싱 사용 : slice(시작인덱스, 종료인덱스)
// new Date().getFullYear()
// 7번 인덱스가 1과 2이면 1900년대 출생 | 3과 4이면 2000년대 출생 | 1과 3이면 남성 | 2와 4면 여성

const socialSecurityNum = String(prompt("주민등록번호 입력: "));
const yymmdd = socialSecurityNum.slice(0, 7);
const id = socialSecurityNum.slice(9, 14);

console.log(id);

// prompt 입력받기 : 자바스크립트는 기본적으로 웹기반의 언어이므로 콘솔 입력이 없음
const userName = prompt("이름을 입력하세요.");
// console.log(typeof userName);
const greetingTag = document.querySelector(".greeting");

if (userName) {
  greetingTag.innerText = userName + "님, 안녕하세요.";
} else {
  greetingTag.innerText = "이름 미입력";
}
