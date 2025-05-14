<!-- 화면을 그려주는 부분 -->
<template>
  <h2>ref 감지: {{ refName }}</h2>
  <h2>{{ name }}</h2>
  <input :value="refName" @input="updateName($event)" />
</template>

<script setup>
// 데이터 로직을 정의하는 부분

import { ref } from "vue"; // 구조 분해, { } 해당 모듈에서 ref만 빼오는거
// ref: 원시 값을 감싸는 반응형 래퍼
// 반응형 상태(reactive state) 만들 때 사용
const refName = ref("장원영");
let name = "안유진";

const updateName = (e) => {
  refName.value = e.target.value;
};
</script>
