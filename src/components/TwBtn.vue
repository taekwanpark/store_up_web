<template>
  <FormKit
    :input-class="{
      'h-[50px] w-[4.7rem] text-sm': 'btnSize2Xs' === btnSize,
      'h-[50px] w-32 text-sm': 'btnSizeXs' === btnSize,
      'h-[50px] w-[9.75rem] text-base': 'btnSizeSm' === btnSize,
      'h-[60px] w-44 text-base': 'btnSizeMd' === btnSize,
      'h-[60px] w-60 text-base': 'btnSizeLg' === btnSize,
      'h-[60px] w-96 text-base': 'btnSizeXl' === btnSize,
      'rounded-md': 'roundSizeSm' === roundSize,
      'rounded-full': 'roundSizeLg' === roundSize,
      'bg-black text-white hover:bg-white hover:text-black':
        props.isBlack === 'black',
      'bg-white text-black hover:bg-gray-50': props.isBlack === 'white',
    }"
    type="button"
    v-on="isSubmit ? {} : { click: goToRoute }"
  >
    <slot />
  </FormKit>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  isBlack: { type: String, default: "white" },
  isSubmit: Boolean,
  roundSize: String,
  btnSize: String,
  routeTo: String,
});

const btnSize = computed(() => {
  if (props.btnSize === "xl") {
    return "btnSizeXl";
  } else if (props.btnSize === "lg") {
    return "btnSizeLg";
  } else if (props.btnSize === "md") {
    return "btnSizeMd";
  } else if (props.btnSize === "sm") {
    return "btnSizeSm";
  } else if (props.btnSize === "xxs") {
    return "btnSize2Xs";
  } else {
    return "btnSizeXs";
  }
});

const roundSize = computed(() => {
  if (props.roundSize === "lg") {
    return "roundSizeLg";
  } else {
    return "roundSizeSm";
  }
});

const goToRoute = () => {
  if (props.routeTo) {
    router.push(`${props.routeTo}`);
  }
};
</script>
