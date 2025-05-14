<template>
  <h2 v-if="isLogin">환영합니다.</h2>
  <h2 v-else>로그인 후 사용하세요.</h2>
</template>

<script setup>
const isLogin = false;
const name = "곰돌이사육사";
</script>
