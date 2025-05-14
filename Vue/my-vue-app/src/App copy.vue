<script setup>
// 데이터 및 로직 정의 (Composition API 방식)
import { ref } from "vue";
const message = ref("Vue 3 시작하기");
const name = ref("");
</script>

<template>
  <!-- UI 구조 작성 -->
  <h1>{{ name }}</h1>
  <input v-model="name" placeholder="이름 입력" />
</template>

<!-- 컴포넌트 스타일이 해당 컴포넌트에만 적용 -->
<!-- 컴포넌트 스타일 (선택사항) -->
<style scoped>
h1 {
  font-size: 30px;
  color: royalblue;
}
input {
  padding: 8px;
  font-size: 18px;
  margin-top: 10px;
}
</style>
