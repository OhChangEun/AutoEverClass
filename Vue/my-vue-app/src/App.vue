<script setup>
import { ref, reactive } from "vue";
import DataBinding from "./components/0514/1st_DataBinding.vue";
import ConditionRender from "./components/0514/2nd_ConditionRender.vue";
import ItrableArray from "./components/0514/3rd_IterableArray.vue";
import ClassBinding from "./components/0514/4th_ClassBinding.vue";
import Reactive from "./components/0514/5th_Reactive.vue";
import Computed from "./components/0514/6th_Computed.vue";
import Watch from "./components/0514/7th_Watch.vue";
import Review from "./components/0515/1st_review.vue";
import CardView from "./components/0515/2nd_UseProps.vue";
import Parent from "./components/0515/3rd_PropsPracticeParent.vue";
import EmitParent from "./components/0515/4th_EmitParent.vue";
import News from "./components/0515/Practice_News/News.vue";
import EventRef from "./components/0516/1st_EventRef.vue";
import SingUp from "./components/0516/PracticeSignUp/page/SignUp.vue";
import SelectBox from "./components/0516/2nd_SelectBox.vue";
import ArrayRender from "./components/0516/3rd_ArrayRender.vue";
import MemberList from "./components/0516/PracticeMember/MemberList.vue";
// const user = reactive({
//   name: "",
//   job: "",
//   age: 0,
// });
</script>

<template>
  <!-- UI 구조 작성 -->
  <!-- <h1>App.vue 영역 입니다.</h1> -->
  <!-- <DataBinding /> -->
  <!-- <ConditionRender /> -->
  <!-- <ItrableArray /> -->
  <!-- <ClassBinding /> -->
  <!-- <Reactive /> -->
  <!-- <Computed /> -->
  <!-- <Watch /> -->
  <!-- <Review /> -->
  <!-- <h3>App.vue 영역 입니다.</h3>
  <input v-model="user.name" placeholder="이름 입력" />
  <br />
  <input v-model="user.job" placeholder="직업 입력" />
  <br />
  <input v-model="user.age" placeholder="나이 입력" />

  <CardView :user="user" /> -->
  <!-- <Parent /> -->
  <!-- <EmitParent /> -->
  <!-- <News /> -->
  <!-- <EventRef /> -->
  <SingUp />
  <!-- <SelectBox /> -->
  <!-- <ArrayRender /> -->
  <!-- <MemberList /> -->
</template>

<!-- 컴포넌트 스타일이 해당 컴포넌트에만 적용 -->
<!-- 컴포넌트 스타일 (선택사항) -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
:root {
  --main-logo-color: #002c5f;
  --background-color: #fafafa;
  --footer-color: #e9f1fe;
  --header-height: 72px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}
</style>
