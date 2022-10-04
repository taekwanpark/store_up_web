<template>
  <div class="py-14">
    <div class="mb-6 flex items-center justify-between">
      <div class="text-2xl font-semibold">{{ props.title }}</div>
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
        v-for="person in people.slice(0, 8)"
        :key="person.email"
        class="col-span-1 flex flex-col overflow-hidden bg-white"
      >
        <div class="group relative">
          <img
            :alt="person.name"
            :src="person.imageUrl"
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
              {{ person.name }}
            </h3>
            <span
              v-if="person.subscription"
              class="inline-flex items-center rounded-xl bg-gray-200 px-2 py-0.5 text-center text-xs font-semibold font-medium text-indigo-500"
              >정기구독</span
            >
          </div>
          <div class="text-base">새콤달콤 괴정 감귤 500g</div>

          <div class="text-lg">{{ person.price }} <span> 원</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  ChevronRightIcon,
  HeartIcon as HeartIconLine,
  ShoppingCartIcon as ShoppingCartIconLine,
} from "@heroicons/vue/24/outline";
import img1 from "@/assets/images/img1.jpg";
import img3 from "@/assets/images/img3.jpg";
import img5 from "@/assets/images/img5.jpg";
import img6 from "@/assets/images/img6.jpeg";
import img7 from "@/assets/images/img7.jpeg";

const props = defineProps({
  title: { type: String, required: true },
  routeTo: { type: String, required: true },
});

const people = ref([
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
]);
</script>
