<template>
  <ul class="dive mt-[16px] mb-[14px] flex w-full items-center justify-center">
    <li
      v-for="item in list"
      :key="item"
      class="flex items-center justify-center"
    >
      <span
        class="mx-[55px] h-[24px] cursor-pointer text-[16px] font-light leading-[27px] tracking-[-0.4px]"
      >
        {{ item }}
      </span>
      <span
        v-if="!(list[list.length - 1] === item)"
        class="inline-block h-[16px] border-r border-black"
      ></span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const list = ref([
  "괴정시장소개",
  "개인정보취급방침",
  "이용약관",
  "FAQ",
  "1:1 문의",
]);
</script>
