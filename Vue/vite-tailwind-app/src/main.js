import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router"; // 위에서 만든 라우터 불러오기

// createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
