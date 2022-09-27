<template>
  <label :for="props.text" class="block hidden">{{ props.text }}</label>
  <div>
    <input
      :id="props.text"
      :name="props.text"
      :placeholder="props.placeholder"
      :type="props.type"
      class="block h-[57px] w-full appearance-none rounded-[3px] border border-amuzGray-707070 px-[21px] text-[16px] leading-[24px] placeholder-amuzGray-d2d2d2 placeholder:text-[16px]"
      required=""
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  type: String,
  text: String,
});
</script>
