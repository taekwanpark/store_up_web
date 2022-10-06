<template>
  <div class="mb-32">
    <InnerLgLayout>
      <div class="my-20 inline-flex w-full justify-center">
        <span class="text-2xl font-semibold">정기구독</span>
      </div>
      <div>
        <div class="w-full rounded-lg border border-store-border">
          <ul
            class="grid grid-flow-col grid-rows-1 justify-items-center py-4 px-2 text-base font-light text-store-gray-extraDark"
          >
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              전체보기
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              농산물
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              수산물
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              축산물
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              임산물
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              가공식품
            </li>
            <li
              class="inline-flex h-10 w-28 cursor-pointer items-center justify-center rounded-lg px-6 py-2 hover:bg-store-gray-extraLight hover:text-store-red-light"
            >
              공산품
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
import InnerLgLayout from "@/components/layouts/InnerLgLayout";

import img1 from "@/assets/images/img1.jpg";
import img3 from "@/assets/images/img3.jpg";
import img5 from "@/assets/images/img5.jpg";
import img6 from "@/assets/images/img6.jpeg";
import img7 from "@/assets/images/img7.jpeg";

const products = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "1,900",
    imageUrl: img1,
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,200",
    imageUrl: img5,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "13,500",
    imageUrl: img6,
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,800",
    imageUrl: img7,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "6,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "+1-202-555-0170",
    imageUrl: img3,
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "6,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: true,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "7,800",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    price: "13,500",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    subscription: false,
  },
];
</script>
