<template>
  <div
    v-if="showCategory"
    class="mb-10 w-full rounded-lg border border-store-border"
  >
    <ul
      class="grid w-full grid-cols-4 justify-items-start gap-1 py-5 px-14 text-base font-light text-store-gray-extraDark"
    >
      <li
        class="flex cursor-pointer items-center justify-start rounded-lg px-5 pt-3 pb-2 hover:bg-store-gray-light hover:text-store-red-light"
      >
        전체보기
      </li>
      <li
        v-for="i in groupList"
        :key="i"
        class="flex cursor-pointer items-center justify-start rounded-lg px-5 pt-3 pb-2 hover:bg-store-gray-light hover:text-store-red-light"
      >
        {{ i.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { groupList } from "@/assets/groupList";

const props = defineProps({
  showCategory: { type: Boolean, default: false, required: true },
});
</script>
