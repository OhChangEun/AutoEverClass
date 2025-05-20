<template>
  <div class="p-6 space-y-6">
    <h1 class="text-xl font-bold">🎨 테마 색상 선택</h1>
    <div class="flex gap-3 flex-wrap">
      <button
        v-for="c in colors"
        :key="c"
        @click="setColor(c)"
        :style="{ backgroundColor: c }"
        class="px-4 py-2 rounded text-white font-bold shadow"
      >
        {{ c }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useColorThemeStore } from "@/stores/color";

const themeStore = useColorThemeStore();
const setColor = themeStore.setColor;
const colors = ["orange", "green", "lightgrey", "grey", "royalblue"];
</script>

<!-- themeStore를 불러와서 사용하는 부분 
useThemeStore(): 전역 저장소 불러오기
setColor(...): 버튼 클릭 시 색상 바꾸기 -->
