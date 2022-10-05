<template>
  <div class="m-auto flex h-full w-full max-w-[1920px] flex-col">
    <!--		banner-->
    <div
      class="flex h-16 w-full flex-none items-center justify-center bg-gray-100"
    >
      <div>3만원 이상 무료배송!</div>
    </div>

    <Header />

    <main
      :class="
        route.path.includes('/products') || route.path === '/' ? '' : 'py-32'
      "
      class="mb-auto min-h-fit w-full"
    >
      <slot></slot>
    </main>
    <StickyProducts />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../header/Header";
import Footer from "@/components/footer/Footer";
import { useRoute } from "vue-router";
import StickyProducts from "@/components/StickyProducts";

const route = useRoute();
</script>
