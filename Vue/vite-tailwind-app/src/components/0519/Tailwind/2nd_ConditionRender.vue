<template>
  <div class="flex justify-center items-center min-h-screen">
    <h2 v-if="isLogin">환영합니다.</h2>
    <h2 v-else>로그인 후 사용하세요.</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isLogin = ref(true);
</script>
