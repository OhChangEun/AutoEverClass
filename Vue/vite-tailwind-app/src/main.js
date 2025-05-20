import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router"; // 위에서 만든 라우터 불러오기

// 전역 상태 관리
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 라우터 설정
const app = createApp(App);

// Pinia 플러그인 연결
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// 전체 앱 설정
app.use(pinia); // ✅ 상태 관리
app.use(router); // ✅ 라우터 등록
app.mount("#app"); // ✅ 마운트

// 앱의 초기 설정.
// createPinia(): Pinia 상태 관리 시작
// pinia.use(...): persist:true가 동작하도록 플러그인 연결
// app.use(pinia): 전체 앱에 Pinia 상태 연결

// => 이 설정을 해야만 theme.js 상태 저장소가 제대로 작동
