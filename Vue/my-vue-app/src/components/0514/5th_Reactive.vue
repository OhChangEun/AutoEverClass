<template>
  <div>
    <h2>사용자 정보</h2>
    <p>이름 : {{ member.name }}</p>
    <p>나이 : {{ member.age }}</p>
    <p>주소 : {{ member.addr }}</p>
    <p>센터 : {{ member.position }}</p>
    <div>
      <input type="text" v-model="member.name" placeholder="이름 입력" />
      <input type="number" v-model="member.age" placeholder="나이 입력" />
      <input type="text" v-model="member.addr" placeholder="주소 입력" />
      <input type="text" v-model="member.position" placeholder="주소 입력" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const member = reactive({
  name: "장원영",
  age: 22,
  addr: "서울시 강남구 역삼동",
  position: "센터",
});
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
