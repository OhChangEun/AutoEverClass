import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/recruitment/page/Login.vue";
import SignUp from "../components/recruitment/page/SignUp.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
