<template>
  <!-- <SignUp /> -->
  <!-- <Login /> -->
  <!-- <div>
    <nav>
      <router-link to="/signup">회원가입</router-link>
      <router-link to="/login">로그인</router-link>
    </nav>

    <br />
    router-view는 nav 밖에서 콘텐츠를 렌더링
    <router-view />
  </div> -->

  <!-- <div
    :style="{ backgroundColor: themeStore.color }"
    class="min-h-screen transition-all"
  >
    <router-view />
  </div>
  <ThemeSetting /> -->
  <!-- <router-view />
  <BaseModal /> -->
  <!-- <div class="w-full h-full flex justify-center items-center">
    <GarbageBag />
  </div> -->
  <div class="w-full h-full flex justify-center">
    <router-view />
    <BaseModal />
  </div>
</template>

<script setup>
import BaseModal from "./components/recruitment/base/BaseModal.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
:root {
  --main-logo-color: #002c5f;
  --background-color: #fafafa;
  --footer-color: #e9f1fe;
  --header-height: 72px;
}
html,
body,
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}
</style>
