import { defineStore } from "pinia";

export const useColorThemeStore = defineStore("theme", {
  state: () => ({
    color: "orange",
  }),
  actions: {
    setColor(newColor) {
      this.color = newColor;
    },
  },
  persist: true, // ✅ 자동으로 localStorage에 저장됨
});

// 전역 상태 저장소.
// 이름은 colorTheme
// state: 저장할 데이터 (여기선 테마 색상 color)
// actions: 상태를 바꾸는 함수들 (setColor로 색을 바꿈)
// persists: true, 앱을 새로고침해도 저장된 color 값을 localStorage에 기억시킴

// => 이 파일은 테마 색상 관련된 데이터를 전역에서  공유하고 바꿀 수 있도록 준비하는 코드
