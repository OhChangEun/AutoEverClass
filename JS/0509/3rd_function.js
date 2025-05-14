// 함수란
// 특정 작업을 반복하거나 재사용할  수 있도록 작성된 코드 블록
// 입력 값을 받을 수 있으며 반환값을 줄 수 있음
// 함수 선언문 : 호이스팅 됨(끌어 올림), 함수는 호출을 해야 실행 됨

// console.log(sum(100, 200));
// console.log(sum(1.1, 2.2));
// console.log(sum("아이브", "안유진"));

// function sum(a, b) {
//   return a + b;
// }

// 함수 표현식 : 변수에 익명 || 기명 함수 할당, 호이스팅 되지 않음.
const mul = function (a, b) {
  return a * b;
};

console.log(mul(5, 3));

// 화살표 함수 : 간결한 표현에 유리, 콜백 함수에서 익명의 함수를 사용하는 경우 주로 사용
const div = (a, b) => {
  return a / b;
};
console.log(div(10, 4));

// 즉시 실행 함수 : 호출이 없어도 실행되는 함수
// 전역 네임스페이스 오염 방지
// 초기화 작업 등에 사용
(function () {
  console.log("즉시 실행함수");
  console.log("디바이스 정보 불러와서 셋업....");
})();

// 기본값 할당, 자바에서는 지원하지 않음!
function sum1(a, b, c = 300) {
  return a + b + c;
}

console.log(sum1(100, 200));
