<template>
  <div class="flex flex-col gap-y-[16px]">
    <div class="flex items-center space-x-1">
      <span class="text-left text-[20px]">{{ props.title }}</span>
      <span class="text-[16px] font-light text-[#FF0000]">{{
        props.isRequired ? "(필수)" : "(선택)"
      }}</span>
    </div>
    <div>
      <div
        class="h-[244px] overflow-auto rounded-[5px] border border-amuzGray-E9E9E px-8 py-8 text-[20px] text-amuzGray-979797"
      >
        {{ Terms[0].text }}
      </div>
    </div>
    <FormKit
      :classes="{
        label: '$reset text-black text-[14px]',
      }"
      label="위 모든 항목에 모두 동의합니다."
      type="checkbox"
    />
  </div>
</template>

<script setup>
import Terms from "@/assets/Terms";

const props = defineProps({
  term: String,
  title: String,
  isRequired: Boolean,
});
</script>
