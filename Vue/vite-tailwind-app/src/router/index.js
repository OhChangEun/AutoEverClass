import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import GarbageBag from "../components/garbageBag/GarbageBag.vue";
import ImageUpload from "../components/ImageUpload.vue";
import Category from "../pages/Category.vue";
import Board from "../pages/Board.vue";
import BoardDetailPage from "../components/board/BoardDetailPage.vue";
import BoardWrite from "../pages/BoardWrite.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/garbagebag", component: GarbageBag },
  { path: "/imageupload", component: ImageUpload },
  { path: "/category", component: Category },
  { path: "/board", component: Board },
  { path: "/boarddetail/:id", component: BoardDetailPage },
  { path: "/boardwrite", component: BoardWrite },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
