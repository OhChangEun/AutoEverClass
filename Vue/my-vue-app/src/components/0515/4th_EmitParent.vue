<template>
  <div>
    <EmitChild @send-message="handleMessage" />
    <h3>{{ message }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmitChild from "./4th_EmitChild.vue";
const message = ref("");
const handleMessage = (payload) => {
  // 자식이 넣어준 메시지가 여기로 들어옴
  message.value = payload;
};
</script>
