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
  <router-view />
  <BaseModal />
</template>

<script setup>
import SignUp from "./components/recruitment/page/SignUp.vue";
import Login from "./components/recruitment/page/Login.vue";
import ThemeSetting from "./pages/ThemeSetting.vue";
import Home from "./components/recruitment/page/Home.vue";
import { useColorThemeStore } from "@/stores/color";
import BaseModal from "./components/recruitment/base/BaseModal.vue";
import GarbageBag from "./components/garbageBag/GarbageBag.vue";

const themeStore = useColorThemeStore();
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
