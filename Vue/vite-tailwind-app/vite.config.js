import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // ⬅️ Node의 path 모듈

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ⬅️ @ = src
    },
  },
});

// @/stores/theme 같은 경로를 쉽게 쓰기 위한 설정
// 폴더 위치 기억 안해도 됨
// @/stores/theme = src/stores/theme.js
