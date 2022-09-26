<template>
  <div class="m-auto min-h-full max-w-[1920px]">
    <!--		banner-->
    <div
      id="first-row"
      class="flex h-[57px] w-full items-center justify-center bg-amuzGray-f5f5f5"
    >
      <div>3만원 이상 무료배송!</div>
    </div>
    <!--		inner container-->
    <div class="flex justify-center">
      <div class="w-full max-w-[1300px]">
        <Header />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header";
</script>
