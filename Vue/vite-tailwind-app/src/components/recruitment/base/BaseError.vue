<template>
  <div
    v-if="isVisible"
    class="items-center gap-1 m-0 ml-1 text-red-500 font-normal text-[13px]"
  >
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span class="ml-1">{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  isVisible: Boolean,
});
</script>
