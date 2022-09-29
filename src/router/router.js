import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import SignUp from "@/pages/signup/SignUp";
import IdInquiry from "@/pages/inquiry/IdInquiry";
import PasswordInquiry from "@/pages/inquiry/PasswordInquiry";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "로그인" },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    meta: { title: "회원가입" },
  },
  {
    path: "/inquiry/id",
    name: "idInquiry",
    component: IdInquiry,
    meta: { title: "아이디 찾기" },
  },
  {
    path: "/inquiry/password",
    name: "passwordInquiry",
    component: PasswordInquiry,
    meta: { title: "비밀번호 찾기" },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const defaultTitle = "Store Up";
router.beforeEach((to, from) => {
  window.document.title = to.meta.title ? to.meta.title : defaultTitle;
});
export default router;
