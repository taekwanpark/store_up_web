<template>
  <div
    :class="props.margin"
    class="grid grid-cols-5 items-center gap-x-[5px] justify-self-start last:mb-0"
  >
    <label :for="props.label" class="block text-[16px] font-medium">{{
      props.text
    }}</label>
    <div :class="[isWide ? 'col-span-4' : 'col-span-3']" class="border">
      <input
        :id="props.label"
        :name="props.label"
        :pattern="props.pattern"
        :placeholder="props.placeholder"
        :type="props.type"
        class="block w-full rounded-[5px] border border-amuzGray-707070 py-[12px] pl-[14px] placeholder-amuzGray-d2d2d2"
      />
    </div>
    <SubmitBtn v-if="props.hasBtn" shape="rd" size="sm"
      >{{ props.btnText }}
    </SubmitBtn>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SubmitBtn from "@/components/SubmitBtn";

const props = defineProps({
  text: { type: String },
  placeholder: { type: String },
  label: { type: String, required: true },
  type: { type: String, required: true },
  isRequired: Boolean,
  hasBtn: Boolean,
  btnText: String,
  isWide: Boolean,
  margin: { type: String, default: "mb-[22px]" },
  pattern: String,
});
</script>

<style scoped></style>
