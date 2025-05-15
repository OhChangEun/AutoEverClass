<template>
  <div class="card">
    <h3>{{ user.name }}</h3>
    <div>나이: {{ user.age }}</div>
    <div>주소: {{ user.addr }}</div>
    <div>{{ isAdult ? "성인" : "미성년자" }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  user: Object,
});
const isAdult = computed(() => {
  return props.user.age > 19; // 여기서는 props를 써줘야함.
});
</script>

<style scoped>
.card {
  border: 1px solid #aaa;
  padding: 1rem;
  border-radius: 6px;
  width: 300px;
  background-color: #ccc;
  margin: 1rem auto;
}
</style>
