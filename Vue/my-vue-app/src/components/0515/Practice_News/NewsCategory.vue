<template>
  <div class="category-container">
    <div
      v-for="category in newsCategory"
      :key="category"
      @click="() => send(category)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script setup>
const newsCategory = ["전체", "정치", "경제", "사회", "문화", "과학"];
const emit = defineEmits(["send-category"]); // "send-category"라는 이름의 이벤트를 부모에게 보냄
const send = (category) => {
  emit("send-category", category);
  // emit 함수로 "send-category" 이벤트 발생!!!
  // 두 번째 인자로 category 값을 함께 부모 컴포넌트에 전달합니다.
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-direction: row;
}
.category-container div {
  padding: 20px 40px;
  background-color: #ccc;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.category-container div:hover {
  filter: brightness(0.95);
  border: none;
}
</style>
