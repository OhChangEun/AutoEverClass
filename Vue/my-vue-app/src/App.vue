<script setup>
import DataBinding from "./components/1st_DataBinding.vue";
import ConditionRender from "./components/2nd_ConditionRender.vue";
import ItrableArray from "./components/3rd_IterableArray.vue";
import ClassBinding from "./components/4th_ClassBinding.vue";
import Reactive from "./components/5th_Reactive.vue";
import Computed from "./components/6th_Computed.vue";
import Watch from "./components/7th_Watch.vue";
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
  <Watch />
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
