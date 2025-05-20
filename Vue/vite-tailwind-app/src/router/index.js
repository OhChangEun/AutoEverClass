import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/recruitment/page/Home.vue";
import Login from "../components/recruitment/page/Login.vue";
import SignUp from "../components/recruitment/page/SignUp.vue";
import GarbageBag from "../components/garbageBag/GarbageBag.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/garbagebag", component: GarbageBag },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
