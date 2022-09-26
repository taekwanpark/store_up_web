<template>
  <div>
    <span v-if="menu">ICON</span>
    <a
      class="px-3 py-2 text-[20px] font-medium leading-[29px] tracking-[-0.5px]"
      href="#"
    >
      {{ props.text }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  menu: Boolean,
});
</script>
