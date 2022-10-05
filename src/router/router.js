import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import IdInquiry from "@/pages/inquiry/IdInquiry";
import PasswordInquiry from "@/pages/inquiry/PasswordInquiry";
import BestProducts from "@/pages/BestProducts";
import NewProducts from "@/pages/NewProducts";
import DiscountProducts from "@/pages/DiscountProducts";
import Subscription from "@/pages/Subscription";

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
  {
    path: "/products",
    children: [
      {
        path: "best",
        name: "bestProducts",
        component: BestProducts,
        meta: { title: "베스트 상품" },
      },
      {
        path: "newest",
        name: "newestProducts",
        component: NewProducts,
        meta: { title: "신상품" },
      },
      {
        path: "discount",
        name: "discountProducts",
        component: DiscountProducts,
        meta: { title: "떨이할인" },
      },
      {
        path: "subscription",
        name: "subscription",
        component: Subscription,
        meta: { title: "정기구독" },
      },
    ],
  },
  // {
  //   path: "/products/newest",
  //   name: "bestProducts",
  //   component: NewProducts,
  //   meta: { title: "신상품" },
  // },
  // {
  //   path: "/products/discount",
  //   name: "bestProducts",
  //   component: DiscountProducts,
  //   meta: { title: "떨이할인" },
  // },
  // {
  //   path: "/products/subscription",
  //   name: "bestProducts",
  //   component: Subscription,
  //   meta: { title: "정기구독" },
  // },
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
