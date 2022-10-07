<template>
  <div class="mb-32">
    <InnerLgLayout>
      <div class="my-20 inline-flex w-full justify-center">
        <span class="text-2xl font-semibold">정기구독</span>
      </div>
      <div>
        <div class="w-full rounded-lg border border-store-border">
          <ul
            class="grid grid-cols-4 justify-items-start gap-1 py-5 px-14 text-base font-light text-store-gray-extraDark"
          >
            <li
              v-for="i in categories"
              :key="i"
              class="flex cursor-pointer items-center justify-start rounded-lg px-5 pt-3 pb-2 hover:bg-store-gray-light hover:text-store-red-light"
            >
              {{ i }}
            </li>
          </ul>
        </div>
      </div>
      <MainProductList :products="products" is-page list-amount="999" />
    </InnerLgLayout>
  </div>
</template>

<script setup>
import MainProductList from "@/components/main/ProductsList";
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import { products } from "@/assets/productsList";

const categories = [
  "전체보기",
  "농산물",
  "수산물",
  "축산물",
  "임산물",
  "가공식품",
  "공산품",
];
</script>
