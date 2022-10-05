<template>
  <div class="py-14">
    <div class="mb-6 flex items-center justify-between">
      <div class="text-2xl font-semibold">{{ title }}</div>
      <div class="group flex cursor-pointer items-center justify-end">
        <div
          class="h-5 text-lg leading-none text-gray-500 group-hover:text-gray-600"
        >
          더보기
        </div>
        <ChevronRightIcon
          class="h-5 w-5 text-gray-600 group-hover:text-gray-800"
        />
      </div>
    </div>
    <ul class="grid grid-cols-4 gap-x-6 gap-y-20" role="list">
      <li
        v-for="product in products.slice(0, parseInt(listAmount))"
        :key="product.email"
        class="col-span-1 flex flex-col overflow-hidden bg-white"
      >
        <div class="group relative">
          <img
            :alt="product.name"
            :src="product.imageUrl"
            class="mx-auto h-80 w-full cursor-pointer rounded-lg object-cover"
          />

          <div
            class="absolute bottom-0 h-full w-full cursor-pointer opacity-0 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:opacity-30"
          ></div>

          <div
            class="absolute bottom-4 right-4 flex cursor-pointer gap-x-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
          >
            <div class="flex justify-center">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white pt-px"
              >
                <HeartIconLine
                  class="h-5 w-5 fill-white text-black hover:h-6 hover:w-6 hover:fill-red-500 hover:text-white"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white pt-px"
              >
                <ShoppingCartIconLine
                  class="h-5 w-5 fill-white text-black hover:h-6 hover:w-6 hover:fill-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 space-y-2">
          <div class="flex items-center justify-between gap-x-2">
            <h3 class="text-base text-gray-500">
              {{ product.name }}
            </h3>
            <span
              v-if="product.subscription"
              class="inline-flex items-center rounded-xl bg-gray-200 px-2 py-0.5 text-center text-xs font-semibold font-medium text-indigo-500"
              >정기구독</span
            >
          </div>
          <div class="text-base">새콤달콤 괴정 감귤 500g</div>

          <div class="text-lg">{{ product.price }} <span> 원</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  ChevronRightIcon,
  HeartIcon as HeartIconLine,
  ShoppingCartIcon as ShoppingCartIconLine,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  title: { type: String, required: true },
  routeTo: { type: String, required: true },
  listAmount: { type: String, default: "8" },
  products: { type: Array, required: true },
});
</script>
