import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/member/Login";
import SignUp from "@/pages/member/SignUp";
import FindId from "@/pages/member/find/FindId";
import FindPassword from "@/pages/member/find/FindPassword";
import Products from "@/pages/Products";
import Promotion from "@/pages/Promotion";
import Payment from "@/pages/Payment";

const routes = [
  {
    path: process.env.STORE_MAIN_BASE,
    name: process.env.STORE_MAIN,
    component: Main,
  },
  {
    path: `/${process.env.STORE_MEMBER}`,
    children: [
      {
        path: process.env.STORE_MEMBER_LOGIN,
        name: process.env.STORE_MEMBER_LOGIN,
        component: Login,
        // meta: { title: "로그인" },
      },
      {
        path: process.env.STORE_MEMBER_SIGNUP,
        name: process.env.STORE_MEMBER_SIGNUP,
        component: SignUp,
        // meta: { title: "회원가입" },
      },
      {
        path: process.env.STORE_MEMBER_FIND_BASE,
        children: [
          {
            path: process.env.STORE_MEMBER_FIND_ID,
            name: process.env.STORE_MEMBER_FIND_ID,
            component: FindId,
            // meta: { title: "아이디 찾기" },
          },
          {
            path: process.env.STORE_MEMBER_FIND_PW,
            name: process.env.STORE_MEMBER_FIND_PW,
            component: FindPassword,
            // meta: { title: "비밀번호 찾기" },
          },
        ],
      },
    ],
  },
  {
    path: `/${process.env.STORE_PRODUCTS}`,
    name: process.env.STORE_PRODUCTS,
    component: Products,
  },
  {
    path: `/${process.env.STORE_PROMOTION}`,
    name: process.env.STORE_PROMOTION,
    component: Promotion,
  },
  {
    path: `/${process.env.STORE_PAYMENT}`,
    name: process.env.STORE_PAYMENT,
    component: Payment,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const defaultTitle = "온니샵";
router.beforeEach((to, from) => {
  window.document.title = defaultTitle;
  // window.document.title = to.meta.title
  //   ? `온니샵 | ${to.meta.title}`
  //   : defaultTitle;
});

export default router;
