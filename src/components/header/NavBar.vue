<template>
  <Popover class="relative mt-8 w-full bg-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex items-center justify-between py-3">
        <PopoverGroup as="nav" class="flex w-full items-center justify-between">
          <Popover v-slot="{ open }" class="relative">
            <PopoverButton
              :class="[
                open ? 'text-gray-600' : 'text-black',
                'group flex items-center rounded-md bg-white focus:outline-none ',
              ]"
            >
              <Bars3Icon
                :class="[
                  open ? 'text-gray-600' : 'text-black',
                  'mr-2 h-8 w-8 group-hover:text-gray-600',
                ]"
                aria-hidden="true"
              />
              <span class="text-xl font-medium group-hover:text-gray-600"
                >카테고리</span
              >
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-2 mt-5 w-screen max-w-fit">
                <div
                  :class="secondaryCategories ? 'w-80' : 'w-40'"
                  class="flex divide-x-2 overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-in-out"
                  @mouseleave="mouseLeave"
                >
                  <ul
                    class="relative z-20 flex w-40 flex-col justify-start gap-1 rounded-l-lg bg-white p-4"
                  >
                    <li
                      v-for="item in solutions"
                      :key="item.name"
                      class="flex h-10 w-32 cursor-pointer items-center rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                      @mouseenter="mouseEnter"
                    >
                      <component
                        :is="item.icon"
                        aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0"
                      />
                      <div class="ml-4">
                        <p
                          class="whitespace-nowrap text-base font-normal leading-none"
                        >
                          {{ item.name }}
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul
                    class="relative z-20 grid w-44 gap-1 rounded-r-lg bg-white p-4"
                  >
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      백미/현미
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      찹쌀/잡곡/곡류
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      김치
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      과일/견과
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      채소/나물
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      농산 가공식품
                    </li>
                    <li
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      기타 농산품
                    </li>
                  </ul>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <RouterLink
            v-for="page in navPages"
            :key="page.title"
            :to="page.to"
            class="text-xl font-medium text-black hover:text-gray-600"
            >{{ page.page }}
          </RouterLink>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const navPages = [
  {
    page: "베스트",
    to: "/products/best",
  },
  {
    page: "신상품",
    to: "/products/newest",
  },
  {
    page: "떨이할인",
    to: "/products/discount",
  },
  {
    page: "정기구독",
    to: "/products/subscription",
  },
  {
    page: "이벤트",
    to: "/products/subscription",
  },
];

const solutions = [
  {
    name: "농산물",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "수산물",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "축산물",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "임산물",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "가공식품",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "공산품",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const secondaryCategories = ref(false);

const mouseEnter = () => {
  secondaryCategories.value = true;
  console.log(secondaryCategories.value);
};
const mouseLeave = () => {
  secondaryCategories.value = false;
};
</script>
<style></style>
