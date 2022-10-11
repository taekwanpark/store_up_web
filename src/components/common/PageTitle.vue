<template>
  <div
    :class="
      isCenter
        ? 'mt-24 mb-12 justify-center'
        : 'mt-24 mb-0 w-full justify-start'
    "
    class="flex w-full items-center text-3xl font-semibold"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  isCenter: { type: Boolean, default: true },
});
</script>
