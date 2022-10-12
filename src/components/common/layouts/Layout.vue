<template>
  <div class="m-auto flex h-full w-full max-w-[1920px] flex-col">
    <!--		banner-->
    <div
      class="flex h-16 w-full flex-none items-center justify-center bg-store-gray-light"
    >
      <div>3만원 이상 무료배송!</div>
    </div>

    <Header />

    <main
      :class="
        route.path.includes('/products') || route.path === '/' ? '' : 'py-32'
      "
      class="min-h-fit w-full"
    >
      <slot></slot>
    </main>
    <StickyProducts />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../header/Header";
import Footer from "@/components/common/footer/Footer";
import StickyProducts from "@/components/common/StickyProducts";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
