let num = 0;
while (true) {
  let rand1 = Math.floor(Math.random() * 6) + 1;
  let rand2 = Math.floor(Math.random() * 6) + 1;
  num++;
  console.log(`#${num}: 생성된 주사위: ${rand1}, ${rand2}`);

  if (rand1 == rand2) {
    break;
  }
  console.log(`무인도 탈출 실패...주사위를 다시 굴립니다.`);
  console.log("");
}
