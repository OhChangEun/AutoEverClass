<template>
  <div class="container">
    <h2>회원 정보</h2>
    <Child v-for="(user, index) in users" :key="index" :user="user" />
  </div>
</template>

<script setup>
import Child from "./3rd_PropsPracticeChild.vue";
import { reactive, onMounted } from "vue";
// 서버에서 값을 받아온 것 처럼 하기 위해 reactive를 사용
const users = reactive([]);

// 서버에서 받아온 데이터
const fetchedData = [
  { name: "김민수", age: 24, addr: "부산시" },
  { name: "이서연", age: 19, addr: "서울시" },
  { name: "박지훈", age: 17, addr: "인천시" },
  { name: "최유진", age: 31, addr: "대구시" },
  { name: "정우성", age: 16, addr: "광주시" },
  { name: "한지민", age: 22, addr: "대전시" },
  { name: "서강준", age: 29, addr: "울산시" },
  { name: "김하늘", age: 18, addr: "서울시" },
  { name: "배수지", age: 15, addr: "수원시" },
  { name: "강다니엘", age: 27, addr: "창원시" },
];

// 화면이 처음 나타는 시점
onMounted(() => {
  // 서버로 데이터를 요청하고 데이터가 전달되면 아래의 동작 수행
  users.push(...fetchedData);
});
</script>

<style scoped>
.container {
  width: 500px;
  margin: 40px auto;
  text-align: center;
  background-color: #eee;
  border-radius: 10px;
}
</style>
