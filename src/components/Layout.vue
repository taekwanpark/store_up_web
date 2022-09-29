<template>
  <div class="m-auto flex h-full max-w-[1920px] flex-col">
    <!--		banner-->
    <div
      class="flex h-[57px] w-full flex-none items-center justify-center bg-amuzGray-f5f5f5"
    >
      <div>3만원 이상 무료배송!</div>
    </div>

    <!--		inner container-->
    <Header />

    <main
      class="mt-[63px] mb-[135px] flex h-full justify-center border border-blue-500"
    >
      <InnerLayout>
        <RouterView />
      </InnerLayout>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./header/Header";
import Footer from "@/components/footer/Footer";
import InnerLayout from "@/components/InnerLayout";
</script>
