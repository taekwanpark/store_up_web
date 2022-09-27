<template>
  <nav class="mt-[59px] w-full w-full pb-[13px]">
    <div class="flex w-full justify-between">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <NavLink menu route-to="/" text="카테고리" />
      <NavLink route-to="/" text="베스트" />
      <NavLink route-to="/" text="신상품" />
      <NavLink route-to="/" text="떨이할인" />
      <NavLink route-to="/" text="정기구독" />
      <NavLink route-to="/" text="이벤트" />
    </div>
  </nav>
</template>

<style scoped></style>
<script setup>
import NavLink from "@/components/header/NavLink";
</script>
