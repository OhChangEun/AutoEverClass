<template>
  <!-- 로그인 문제 -->
  <div
    class="flex flex-row items-center gap-x-1 text-[rgba(0,0,0,0.45)] text-xs"
  >
    <i class="fa-solid fa-headphones"></i>
    <a href="#" class="underline">
      <span>{{ label }}</span>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
