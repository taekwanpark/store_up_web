<template>
  <label :for="props.for" class="block hidden">{{ props.for }}</label>
  <div>
    <input
      :id="props.for"
      :name="props.for"
      :placeholder="props.placeholder"
      :type="props.type"
      class="block h-[57px] w-full appearance-none rounded-[5px] border border-amuzGray-707070 px-[21px] text-[16px] leading-[24px] placeholder-amuzGray-d2d2d2 placeholder:text-[16px]"
      required=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  type: String,
  for: String,
});
</script>
