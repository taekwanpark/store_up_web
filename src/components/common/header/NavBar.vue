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
                  <!--parent category-->
                  <ul
                    class="relative z-20 flex w-40 flex-col justify-start gap-1 rounded-l-lg bg-white p-4"
                  >
                    <RouterLink
                      v-for="item in groups"
                      :key="item.name"
                      :to="{
                        name: productLink,
                        query: { category_id: item.id },
                      }"
                      class="flex h-10 w-32 cursor-pointer items-center rounded-lg px-2 py-2 text-black hover:bg-gray-50 hover:text-red-500"
                      tag="li"
                      @mouseenter="mouseEnter"
                    >
                      <component
                        :is="item.icon"
                        aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0"
                      />
                      <div
                        class="whitespace-nowrap text-base font-normal leading-none"
                      >
                        {{ item.description }}
                      </div>
                    </RouterLink>
                  </ul>
                  <!--child category-->
                  <ul
                    class="relative z-20 flex w-40 flex-col justify-start gap-1 rounded-r-lg bg-white p-4"
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
            v-for="item in pageCategory"
            :key="item.name"
            :to="{ name: item.to, query: { categoryId: item.categoryId } }"
            class="text-xl font-medium text-black hover:text-store-gray-extraDark"
            >{{ item.name }}
          </RouterLink>
          <RouterLink
            :to="promotionLink"
            class="text-xl font-medium text-black hover:text-store-gray-extraDark"
            >이벤트
          </RouterLink>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { getData } from "@/libs/useAxios";
import { category } from "@/assets/groupList";

const showChildGroup = ref(false);
const childGroupList = ref([]);

//category parent - child show
const mouseEnter = (e) => {
  showChildGroup.value = true;
  const currentGroup = groups.value.find((o) => o.name === e.target.innerText);
  childGroupList.value = currentGroup.children_groups;
};
const mouseLeave = () => {
  showChildGroup.value = false;
};
//end

//category sort
// const productCategory = computed(() =>
//   category.filter((c) => c.categoryId.startsWith("0"))
// );
const pageCategory = computed(() =>
  category.filter((c) => c.categoryId.startsWith("1"))
);
//end
//promotion link
const productLink = process.env.STORE_PRODUCTS;
const promotionLink = process.env.STORE_PROMOTION;

//axios data
const groups = ref();
onMounted(async () => {
  groups.value = await getData("/api/groups");
});
</script>
<style></style>