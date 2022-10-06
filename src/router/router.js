import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/member/Login";
import SignUp from "@/pages/member/SignUp";
import FindId from "@/pages/member/find/FindId";
import FindPassword from "@/pages/member/find/FindPassword";
import BestProducts from "@/pages/products/BestProducts";
import NewestProducts from "@/pages/products/NewestProducts";
import DiscountProducts from "@/pages/products/DiscountProducts";
import Subscription from "@/pages/products/Subscription";

const routes = [
  {
    path: process.env.STORE_MAIN_PATH,
    name: process.env.STORE_MAIN,
    component: Main,
  },
  {
    path: process.env.STORE_MEMBER_BASE,
    children: [
      {
        path: process.env.STORE_MEMBER_LOGIN,
        name: process.env.STORE_MEMBER_LOGIN,
        component: Login,
        meta: { title: "로그인" },
      },
      {
        path: process.env.STORE_MEMBER_SIGNUP,
        name: process.env.STORE_MEMBER_SIGNUP,
        component: SignUp,
        meta: { title: "회원가입" },
      },
      {
        path: process.env.STORE_MEMBER_FIND_BASE,
        children: [
          {
            path: process.env.STORE_MEMBER_FIND_ID,
            name: process.env.STORE_MEMBER_FIND_ID,
            component: FindId,
            meta: { title: "아이디 찾기" },
          },
          {
            path: process.env.STORE_MEMBER_FIND_PW,
            name: process.env.STORE_MEMBER_FIND_PW,
            component: FindPassword,
            meta: { title: "비밀번호 찾기" },
          },
        ],
      },
    ],
  },
  {
    path: process.env.STORE_PRODUCTS_BASE,
    children: [
      {
        path: process.env.STORE_PRODUCTS_BEST,
        name: process.env.STORE_PRODUCTS_BEST,
        component: BestProducts,
        meta: { title: "베스트 상품" },
      },
      {
        path: process.env.STORE_PRODUCTS_NEWEST,
        name: process.env.STORE_PRODUCTS_NEWEST,
        component: NewestProducts,
        meta: { title: "신상품" },
      },
      {
        path: process.env.STORE_PRODUCTS_DISCOUNT,
        name: process.env.STORE_PRODUCTS_DISCOUNT,
        component: DiscountProducts,
        meta: { title: "떨이할인" },
      },
      {
        path: process.env.STORE_PRODUCTS_SUBSCRIPTION,
        name: process.env.STORE_PRODUCTS_SUBSCRIPTION,
        component: Subscription,
        meta: { title: "정기구독" },
      },
    ],
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
