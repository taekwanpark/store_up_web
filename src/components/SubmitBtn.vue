<template>
  <button
    :class="[
      isBlack ? 'bg-black text-white' : 'bg-white text-black',
      isSmall
        ? 'py-[11px] text-[16px] leading-[24px]'
        : 'py-[14px] text-[20px] leading-[29px] tracking-[-0.5px]',
    ]"
    class="flex w-full items-center justify-center rounded-[3px] border border-amuzGray-707070"
    type="submit"
  >
    {{ props.btnText }}
  </button>
</template>

<script setup>
const props = defineProps({
  btnText: String,
  isBlack: Boolean,
  isSmall: Boolean,
});
</script>
