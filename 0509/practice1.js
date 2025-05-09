let productList = [
  {
    name: "레쓰비",
    price: 700,
  },
  {
    name: "티오피",
    price: 1000,
  },
  {
    name: "비타500",
    price: 800,
  },
  {
    name: "포카리스웨트",
    price: 1000,
  },
  {
    name: "파워에이드",
    price: 1200,
  },
];

const prompt = require("prompt-sync")();

// 금액 입력 받기
let amount = Number(prompt("금액 입력: "));
// 구매 가능한 제품 목록 출력
for (let product of productList) {
  if (product.price <= amount) console.log(product.name);
}
// filter를 사용하는 방법
productList
  .filter((product) => product.price <= amount)
  .forEach((e) => console.log(e.name));
