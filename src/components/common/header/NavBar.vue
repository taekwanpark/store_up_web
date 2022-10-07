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
                  :class="showChildGroup ? 'w-80' : 'w-40'"
                  class="flex divide-x-2 overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-in-out"
                  @mouseleave="mouseLeave"
                >
                  <!--parent group-->
                  <ul
                    class="relative z-20 flex w-40 flex-col justify-start gap-1 rounded-l-lg bg-white p-4"
                  >
                    <li
                      v-for="item in groupList"
                      :key="item.title"
                      class="flex h-10 w-32 cursor-pointer items-center rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                      @mouseenter="mouseEnter"
                    >
                      <component
                        :is="item.icon"
                        aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0"
                      />
                      <div class="ml-4">
                        <RouterLink
                          :to="{ name: item.to, params: { id: '001' } }"
                          class="whitespace-nowrap text-base font-normal leading-none"
                        >
                          {{ item.title }}
                        </RouterLink>
                      </div>
                    </li>
                  </ul>
                  <!--child group-->
                  <ul
                    class="relative z-20 flex w-40 flex-col justify-start gap-1 rounded-l-lg bg-white p-4"
                  >
                    <li
                      v-for="childItem in childGroupList"
                      :key="childItem.name"
                      class="flex h-10 w-28 cursor-pointer items-start whitespace-nowrap rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                    >
                      {{ childItem.name }}
                    </li>
                  </ul>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <RouterLink
            v-for="page in navigation"
            :key="page.title"
            :active-class="process.env.ACTIVE_LINK"
            :to="{ name: page.to }"
            class="text-xl font-medium text-black hover:text-gray-600"
            >{{ page.page }}
          </RouterLink>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { ref } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { groupList, navigation } from "@/assets/groupList";

const showChildGroup = ref(false);
const parentGroupTitle = ref("");
const childGroupList = ref([]);

const mouseEnter = (e) => {
  showChildGroup.value = true;
  parentGroupTitle.value = e.target.innerText;
  childGroupList.value = groupList.find(
    (o) => o.title === parentGroupTitle.value
  )?.childGroupList;
};
const mouseLeave = () => {
  showChildGroup.value = false;
};
</script>
<style></style>