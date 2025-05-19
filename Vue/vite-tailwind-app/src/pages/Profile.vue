<template>
  <div>
    <h1>프로필 페이지</h1>
    <p>사용자명: {{ userName }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute(); // 현재 라우트(경로) 정보 가져오기
const userName = route.params.userName; // 주소에 있는 파라미터 읽기

// useRoute()는 현재 페이지의 라우팅 정보를 담고 있음
// route.params.userName은 주소에 포함된 사용자 이름을 의미함
</script>
