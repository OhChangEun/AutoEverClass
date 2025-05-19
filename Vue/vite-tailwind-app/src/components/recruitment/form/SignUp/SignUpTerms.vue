<template>
  <!-- 약관 동의 -->
  <div class="terms-container">
    <label class="flex gap-2 items-center cursor-pointer">
      <input
        class="w-5 h-5 rounded-full"
        type="checkbox"
        v-model="selectAll"
        @change="toggleAll"
      />
      <span>전체 동의</span>
    </label>

    <hr class="mt-4" />

    <div class="flex flex-col gap-3 py-2">
      <label
        class="flex gap-2 items-center text-sm cursor-pointer"
        v-for="(term, index) in terms"
        :key="index"
      >
        <input
          class="w-4 h-4 cursor-pointer"
          type="checkbox"
          v-model="term.checked"
          @change="CheckIfAllSelected"
        />
        <span>{{ term.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectAll = ref(false);

const terms = ref([
  { label: "[필수] 만 14세 이상 확인", checked: false },
  { label: "[필수] 그리팅 이용약관 동의", checked: false },
  { label: " [필수] 그리팅 개인정보처리방침 동의", checked: false },
]);

const toggleAll = () => {
  terms.value.forEach((term) => {
    term.checked = selectAll.value;
  });
};
const CheckIfAllSelected = () => {
  selectAll.value = terms.value.every((term) => term.checked);
};
</script>
