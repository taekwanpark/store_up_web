<template>
  <div
    class="fixed top-1/2 right-20 w-32 -translate-y-1/2 rounded-lg bg-transparent px-3 py-4 lg:hidden xl:block"
  >
    <div class="flex w-full flex-col gap-1">
      <div
        class="flex w-full items-center justify-center rounded-lg border-2 border-store-border bg-white"
      >
        <div class="py-2 text-sm font-normal">최근 본 상품</div>
      </div>
      <div
        class="flex w-full items-center justify-center rounded-lg border-2 border-store-border bg-white"
      >
        <div class="h-64 rounded-lg p-2 text-sm font-light">
          최근 본 상품이 없습니다.
        </div>
      </div>
      <div
        class="flex w-full items-center justify-center rounded-lg border-2 border-store-border bg-white"
      >
        <div class="py-2 text-sm font-normal">전체 보기</div>
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-5 items-center justify-center rounded-lg bg-black py-1"
    >
      <div class="col-span-3 pb-px text-right text-sm font-light text-white">
        Top
      </div>
      <ArrowSmallUpIcon class="ml-1 h-4 w-4 text-white" />
    </div>
  </div>
</template>

<script setup>
import { ArrowSmallUpIcon } from "@heroicons/vue/24/outline";
</script>
