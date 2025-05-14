// 내장 객체

// 문자열을 다루는 String 객체
// 특정 문자열 포함 여부 : includes(), indexOf()

const email = "hong1234@naver.com";
if (!email.includes("@")) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

if (email.indexOf("@" == -1)) {
  console.log(email.indexOf("@"));
  console.log("올바른 이메일 형식이 아닙니다.");
}

// 슬라이싱 : 문자열 특정 부분 문자열 추출
const fruits = "Apple, Banana, Kiwi";
const subStr = fruits.slice(-8, 15); // 음수 인덱스 지원, 대신 start 보다 end가 크면 빈 문자열을 반환한다(역순 불가)
const subStr1 = fruits.substring(-3, 5); // substring은 음수를 넣어도 0으로 인지, 순서가 바뀔 수 있음(역순)
console.log(subStr);
console.log(subStr1);

// 문자열 대체
let str = "지구오락실, 이영지, 안유진, 미미, 이은지";
let n = str.replace("이은지", "");
console.log(n);

// 문자열 결합
let text = "안녕하세요.";
text += "오늘은 ";
text += "날씨가 아주 좋아요.";
text += "집에 가기 싫어요~~";
console.log(text);

const text1 = "안녕하세요.";
const text2 = text1.concat("오늘은 ");
const text222 = text2 + "오늘은 ";

const text3 = text2.concat("날씨가 아주 좋아요.");
const text4 = text3.concat("집에 가기 싫어요~~");
console.log(text4);

// 파괴적 메소드란?
// 메소드를 호출하는 객체를 변경하며, 원래의 객체를 수정합니다.
