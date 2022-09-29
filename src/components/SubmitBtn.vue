<template>
  <button
    :class="[
      isBlack ? 'bg-black text-white' : 'bg-white text-black',
      btnSize,
      btnShape,
    ]"
    class="flex items-center justify-center border border-amuzGray-707070"
    type="submit"
    v-on="isSubmit ? {} : { click: goToRoute }"
  >
    <slot />
  </button>
</template>
<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();

const props = defineProps({
  isBlack: Boolean,
  shape: String,
  size: String,
  isSubmit: Boolean,
  routeTo: String,
});
const btnSize = computed(() => {
  if (props.size === "full") {
    return "w-full h-full";
  } else if (props.size === "sm") {
    return "w-[125px] py-[12px] text-[16px]";
  } else if (props.size === "md") {
    return "w-[175px] py-[12px] text-[16px]";
  } else {
    return "w-[360px] py-[14px] text-[20px]";
  }
});
const btnShape = computed(() => {
  if (props.shape === "rd") {
    return "rounded-[5px]";
  } else {
    return "";
  }
});
const goToRoute = () => {
  if (props.routeTo) {
    router.push(`${props.routeTo}`);
  } else {
    return;
  }
};
</script>
