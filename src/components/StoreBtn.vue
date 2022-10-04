<!--btn size, text size, shape, btn color-->
<template>
  <FormKit
    :classes="{
      input: {
        'bg-black text-white hover:bg-gray-50 hover:text-black':
          props.isBlack === true,
        'bg-white text-black hover:bg-gray-50 hover:text-black':
          props.isBlack === false,

        'w-96 py-3 px-5': props.btnSize === 'xl',
        'w-60 py-3 px-5': props.btnSize === 'lg',
        'w-44 py-3 px-5': props.btnSize === 'md',
        'w-32 py-3 px-5': props.btnSize === 'sm',
        'w-20 py-3 px-3': props.btnSize === 'xs',
        'w-full py-3': props.btnSize === 'custom',

        'text-base': props.textSize === 'base',
        'text-sm': props.textSize === 'sm',

        'font-normal': props.isBold === false,
        'font-medium': props.isBold === true,

        'rounded-lg': props.isRound === false,
        'rounded-full': props.isRound === true,
      },
    }"
    :type="isSubmit ? 'submit' : 'button'"
    @click="btnClick"
    v-on="isSubmit ? {} : { click: goToRoute }"
  >
    <slot />
  </FormKit>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  btnSize: { type: String, default: "custom" },
  isRound: { type: Boolean, default: false },
  isBlack: { type: Boolean, default: false },
  textSize: { type: String, default: "base" },
  isBold: { type: Boolean, default: false },
  isSubmit: { type: Boolean, default: false },
  routeTo: { type: String },
});

const goToRoute = () => {
  if (props.routeTo) {
    router.push(`${props.routeTo}`);
  }
};
const emits = defineEmits(["btnClick"]);
const btnClick = () => {
  emits("btnClick");
};
</script>
