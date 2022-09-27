<template>
  <div class="relative m-auto flex h-full min-h-full max-w-[1920px] flex-col">
    <!--		banner-->
    <div
      class="flex h-[57px] w-full items-center justify-center bg-amuzGray-f5f5f5"
    >
      <div>3만원 이상 무료배송!</div>
    </div>
    <!--		inner container-->
    <Header />
    <main class="h-full max-h-full">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./header/Header";
import Footer from "@/components/footer/Footer";
</script>
