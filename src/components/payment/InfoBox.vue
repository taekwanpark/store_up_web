<template>
  <div class="">
    <div class="mb-2 flex items-end">
      <div class="text-xl font-medium">{{ title }}</div>
      <div v-if="hasCheckbox" class="ml-5 flex gap-x-5">
        <div class="flex items-center justify-start gap-1">
          <input
            id="issueReceipt"
            checked
            name="cashReceipt"
            type="radio"
            value="issueReceipt"
          />
          <label class="mt-[2px]" for="issueReceipt">신청</label>
        </div>
        <div class="flex items-center justify-start gap-1">
          <input
            id="notIssueReceipt"
            name="cashReceipt"
            type="radio"
            value="notIssueReceipt"
          />
          <label class="mt-[2px]" for="notIssueReceipt">미신청</label>
        </div>
      </div>
    </div>
    <Divider class="border-store-gray-extraDark" />
    <div class="mt-6 flex flex-col gap-5">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import Divider from "@/components/common/Divider";

const props = defineProps({
  title: String,
  hasCheckbox: { type: Boolean, default: false },
});
</script>
