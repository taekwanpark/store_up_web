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
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 w-screen max-w-[150px]"
              >
                <div
                  class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <ul class="relative grid gap-6 gap-8 bg-white p-8 px-5 py-6">
                    <li
                      v-for="item in solutions"
                      :key="item.name"
                      class="-m-4 flex cursor-pointer items-start rounded-lg p-3 text-black hover:bg-gray-50 hover:text-black"
                    >
                      <component
                        :is="item.icon"
                        aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0"
                      />
                      <div class="ml-4">
                        <p class="whitespace-nowrap text-sm font-normal">
                          {{ item.name }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a class="text-xl font-medium text-black hover:text-gray-600" href="#"
            >베스트</a
          >
          <a class="text-xl font-medium text-black hover:text-gray-600" href="#"
            >신상품</a
          >
          <a class="text-xl font-medium text-black hover:text-gray-600" href="#"
            >떨이할인</a
          >
          <a class="text-xl font-medium text-black hover:text-gray-600" href="#"
            >정기구독</a
          >
          <a class="text-xl font-medium text-black hover:text-gray-600" href="#"
            >이벤트</a
          >
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
</script>
