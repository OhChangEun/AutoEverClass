// Callback 함수: 콜백함수는 비동기처리와 아주 밀접한 관계를 가짐
// 콜백함수란? 다른 함수의 인자로 전달되어, 그 함수가 실행 될 때 호출되는 함수를 의미
// 1) 사용자 이벤트 처리 : btn.addEventListener("click", 콜백함수{})
// 2) 서버와 통신 시 사용 : axios 기반의 비동기 통신 (async / await)
// 3) 파일 입출력 시 : 속도 차이가 발생 하므로...
// 의도적으로 지연이 필요한 경우에도 사용

function birdSing(weather) {
  console.log(weather + "🐦 새가 즐겁게 노래합니다.");
}
function catCry() {
  console.log("😿 고양이가 슬프게 웁니다.");
}
function dogDance() {
  console.log("🐶 강아지가 신나게 춤을 춥니다!");
}
// 일반 함수 호출
// function checkAnimalMood(mood) {
//   if (mood === "happy") birdSing();
//   else if (mood === "sad") catCry();
//   else dogDance();
// }

// checkAnimalMood("happy");

function checkAnimalMoodCallBack(mood, happyAction, sadAction) {
  if (mood === "happy") happyAction();
  else if (mood === "sad") sadAction();
}

checkAnimalMoodCallBack("sad", dogDance, catCry);
// 매개변수가 있는 함수를 등록하기 위해
// 익명의 함수를 사용해서 등록한다.
checkAnimalMoodCallBack("happy", () => birdSing("비가와도"), catCry);
