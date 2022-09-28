<template>
  <div class="flex items-center">
    <Bars3Icon v-if="menu" class="mr-[8px] inline h-[31px] w-[31px]" />
    <router-link :to="props.routeTo" class="text-[20px] font-medium">
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
