<template>
  <FormKit
    :classes="{
      input: [btnSize, roundSize],
    }"
    class="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    type="button"
  >
    Button text
  </FormKit>
</template>

<script setup>
import { computed } from "vue";

const btnSizeSm = "px-2.5 py-1.5 text-xs";
const btnSizeMd = "px-4 py-2 text-sm";
const btnSizeLg = "px-6 py-3 text-base";
const roundSizeSm = "rounded-md";
const roundSizeLg = "rounded-full";
const props = defineProps({
  isBlack: Boolean,
  isSubmit: Boolean,
  roundSize: String,
  btnSize: String,
  routeTo: String,
});

const btnSize = computed(() => {
  if (props.btnSize === "lg") {
    return btnSizeLg;
  } else if (props.btnSize === "sm") {
    return btnSizeSm;
  } else {
    return btnSizeMd;
  }
});

const roundSize = computed(() => {
  if (props.roundSize === "lg") {
    return roundSizeLg;
  } else {
    return roundSizeSm;
  }
});
</script>
