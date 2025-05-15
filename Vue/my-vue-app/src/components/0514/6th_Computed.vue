<template>
  <div>
    <h2>computed 예제</h2>
    <input v-model.number="num1" placeholder="숫자 1입력" />
    <input v-model.number="num2" placeholder="숫자 2입력" />
    <p>합계 : {{ sum() }}</p>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const num1 = ref(0);
const num2 = ref(0);

// computed는 의존하는 값이 변경 될 때만 재계산됨
// 다른 반응형 값을 기반으로 자동 계산되는 값을 만들고 싶을 때
// 새로운 값을 반환함 (예: price * quantity)
// 의존한 값이 바뀌면 자동으로 다시 계산됨
const sum = computed(() => {
  console.log("sum 값을 재계산");
  return num1.value + num2.value;
});
</script>

<style scoped>
input {
  padding: 8px;
  margin-right: 8px;
  width: 120px;
}
p {
  margin-top: 1rem;
  font-size: 20px;
  font-weight: bold;
}
</style>
