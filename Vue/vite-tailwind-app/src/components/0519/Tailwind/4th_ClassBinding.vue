<template>
  <div
    class="flex flex-col justify-center items-center gap-5 w-screen min-h-screen"
  >
    <h2 class="text-xl font-bold">고정 클래스</h2>
    <div class="p-4 border border-gray-300 mb-4">항상 적용되는 클래스</div>

    <h2 class="text-xl font-bold">조건부 클래스 (객체 방식)</h2>
    <div
      :class="{ 'p-4 border mb-4': true, active: isActive, error: hasError }"
    >
      {{ isActive ? "Active" : "" }}
      {{ hasError ? "Error" : "" }}
    </div>

    <h2 class="text-xl font-bold">배열 클래스(동적 조합)</h2>
    <div
      :class="[
        'p-4 border mb-4',
        isActive ? 'bg-emerald-100 border-emerald-500' : '',
        hasError ? 'bg-red-100 border-red-500' : '',
      ]"
    ></div>

    <div class="flex gap-3">
      <button
        @click="toggleActive"
        class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        버튼
      </button>
      <button
        class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="toggleError"
      >
        버튼
      </button>
    </div>
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
  hasError.value = !hasError.value;
  isActive.value = false;
};
</script>
