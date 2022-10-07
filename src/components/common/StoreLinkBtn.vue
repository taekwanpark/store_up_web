<!--btn size, text size, shape, btn color-->
<template>
  <FormKit
    :classes="{
      input: {
        'bg-black text-white hover:bg-store-gray-extraLight hover:text-black':
          props.isBlack === true,
        'bg-white text-black hover:bg-store-gray-extraLight hover:text-black':
          props.isBlack === false,

        'w-96 pt-3 pb-2 px-5': props.btnSize === 'xl',
        'w-60 pt-3 pb-2 px-5': props.btnSize === 'lg',
        'w-44 pt-3 pb-2 px-5': props.btnSize === 'md',
        'w-32 pt-3 pb-2 px-5': props.btnSize === 'sm',
        'w-20 pt-3 pb-2 px-3': props.btnSize === 'xs',
        'w-full pt-3 pb-2': props.btnSize === 'custom',

        'text-base': props.textSize === 'base',
        'text-sm': props.textSize === 'sm',

        'font-normal': props.isBold === false,
        'font-medium': props.isBold === true,

        'rounded-lg': props.isRound === false,
        'rounded-full': props.isRound === true,
      },
    }"
    type="button"
    @click="goToRoute"
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
  routeTo: { type: String },
});
const goToRoute = () => {
  router.push({ name: props.routeTo });
};
</script>
