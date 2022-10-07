<template>
  <div>
    <!--		page header-->
    <div class="flex flex-col items-center justify-center">
      <PageTitle :show-sort="showSort">{{ title }}</PageTitle>
      <ProductCategory :show-category="showCategory" />
    </div>

    <!--		show sort : false-->
    <div v-if="!showSort" class="flex h-10 w-full items-center justify-end">
      <div class="group flex cursor-pointer items-center justify-end">
        <div
          class="pt-1 text-lg text-store-gray-extraDark group-hover:text-store-gray-dark"
        >
          더보기
        </div>
        <ChevronRightIcon
          class="h-5 w-5 text-store-gray-extraDark group-hover:text-store-gray-dark"
        />
      </div>
    </div>

    <!--		show sort : true-->
    <div v-if="showSort" class="flex h-10 w-full items-center justify-between">
      <div class="text-xs text-store-gray-extraDark">총 157건</div>
      <div class="cursor-pointer text-xs text-store-gray-extraDark">
        최신순 | 낮은가격순 | 높은 가격순
      </div>
    </div>

    <!--		products list : all-->
    <ul class="grid grid-cols-4 gap-x-6 gap-y-20" role="list">
      <li
        v-for="product in products.slice(0, parseInt(listAmount))"
        :key="product.name"
        class="col-span-1 flex flex-col overflow-hidden bg-white"
      >
        <div class="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            :alt="product.name"
            :src="product.imageUrl"
            class="mx-auto h-80 w-full cursor-pointer rounded-lg object-cover"
          />

          <div
            class="absolute bottom-0 h-full w-full cursor-pointer opacity-0 transition-all duration-300 ease-in-out group-hover:bg-black group-hover:opacity-30"
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
            <h3 class="text-base text-store-gray-extraDark">
              {{ product.name }}
            </h3>
            <span
              v-if="product.is_subscribe"
              class="inline-flex items-center rounded-xl bg-store-gray-normal px-2 pb-0.5 pt-1 text-center text-xs font-normal text-store-blue-dark"
              >정기구독</span
            >
          </div>
          <div class="text-base">새콤달콤 괴정 감귤 500g</div>
          <!--					discount-->
          <div class="flex items-center gap-2">
            <div
              v-if="product.on_discount"
              class="text-lg text-store-red-light"
            >
              {{ product.discount_percentage }} <span> %</span>
            </div>
            <div
              v-if="product.on_discount"
              class="text-sm text-store-gray-dark"
            >
              <del>{{ product.price }} <span>원</span></del>
            </div>
            <div class="text-lg">
              {{ product.on_discount ? product.discount_price : product.price }}
              <span> 원</span>
            </div>
          </div>
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
import PageTitle from "@/components/common/PageTitle";
import ProductCategory from "@/components/products/ProductCategoryBox";

const props = defineProps({
  title: { type: String },
  routeTo: { type: String },
  listAmount: { type: String, default: "8" },
  products: { type: Array, required: true },
  showSort: { type: Boolean, default: true },
  showCategory: { type: Boolean, default: false },
});
</script>
