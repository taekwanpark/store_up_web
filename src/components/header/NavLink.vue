<template>
  <div class="flex">
    <span v-if="menu"
      ><Bars3Icon class="mr-[8px] inline h-[31px] w-[31px]"
    /></span>
    <router-link
      :to="routeTo"
      class="text-[20px] font-medium leading-[29px] tracking-[-0.5px]"
    >
      {{ props.text }}
    </router-link>
  </div>
</template>

<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";

const props = defineProps({
  text: String,
  menu: Boolean,
  routeTo: String,
});
</script>
