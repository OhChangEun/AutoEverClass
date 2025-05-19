import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Profile from "../pages/Profile.vue";
import SignUp from "../components/recruitment/page/SignUp.vue";
// import Login from "../components/page/0519/SignUp/page/SignUp.vue";
import Layout from "../Layout.vue";

const routes = [
  { path: "/", component: SignUp },
  // { path: "/signup", component: SignUp },
  {
    path: "/home",
    component: Layout,
    children: [
      { path: "/about", component: About },
      { path: "/profile/:userName", component: Profile },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
