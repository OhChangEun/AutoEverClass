<template>
  <h2>고정 클래스</h2>
  <div class="box">항상 적용되는 클래스</div>

  <h2>조건부 클래스 (객체 방식)</h2>
  <div :class="{ active: isActive, error: hasError }" class="box">
    {{ isActive ? "Active" : "" }}
    {{ hasError ? "Error" : "" }}
  </div>
  <h2>배열 클래스 (동적 조합)</h2>
  <div
    :class="['box', isActive ? 'active' : '', hasError ? 'error' : '']"
  ></div>
  <div>
    <button @click="toggleActive">버튼</button>
    <button @click="toggleError">버튼</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
const hasError = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
  hasError.value = false;
};
const toggleError = () => {
  isActive.value = false;
  hasError.value = !hasError.value;
};
</script>

<style scoped>
.box {
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}
.active {
  background-color: #d1fae5;
  border-color: #10b981;
}
.error {
  background-color: #fee2e2;
  border-color: #ef4444;
}
button {
  margin-right: 10px;
  padding: 6px 12px;
  background-color: #3b82f6;
  color: white;
}
</style>
