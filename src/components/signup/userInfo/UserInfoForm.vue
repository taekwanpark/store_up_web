<template>
  <div :class="props.mb ? 'mb-4' : ''" class="grid w-full grid-cols-5 gap-x-2">
    <div class="col-span-4">
      <FormKit
        :classes="{
          outer: 'w-full',
          label:
            'block mb-1 text-base font-medium formkit-invalid:text-red-500 text-left',
          wrapper:
            'grid w-full grid-cols-4 items-center gap-x-2 justify-self-start',
          inner:
            'col-span-3 max-w-md  formkit-invalid:border-red-500 mb-1 overflow-hiddenfocus-within:border-blue-500  ',
          input:
            'w-full h-[50px] px-3 border border-gray-400 rounded-lg text-base text-gray-700 placeholder-gray-400',
        }"
        :label="props.inputLabel"
        :placeholder="props.inputPh"
        type="text"
      ></FormKit>
    </div>
    <TwBtn v-if="btnText" btn-size="xs">{{ props.btnText }}</TwBtn>
  </div>
</template>

<script setup>
import TwBtn from "@/components/TwBtn";

const props = defineProps({
  btnText: { type: String },
  inputLabel: { type: String },
  inputPh: { type: String },
  mb: { type: Boolean },
});
</script>

<style scoped></style>
