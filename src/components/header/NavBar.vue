<template>
  <nav class="w-full">
    <div class="flex w-full space-x-[138px]">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <NavLink menu text="카테고리" />
      <NavLink text="베스트" />
      <NavLink text="신상품" />
      <NavLink text="떨이할인" />
      <NavLink text="정기구독" />
      <NavLink text="이벤트" />
    </div>
  </nav>
</template>

<style scoped></style>
<script setup>
import NavLink from "@/components/header/NavLink";
</script>
