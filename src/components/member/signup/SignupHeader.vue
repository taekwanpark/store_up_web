<template>
  <div class="mb-16">
    <div class="mb-4 flex justify-center">
      <span class="text-2xl font-bold">회원가입</span>
    </div>
    <Divider />
    <div class="my-3 flex items-center justify-center gap-x-1">
      <div
        :class="props.currentTab === 'terms' ? '' : 'text-store-gray-dark'"
        class="inline-flex items-center"
      >
        <div class="leading-none">01 약관동의</div>
        <ChevronRightIcon class="mb-1 h-4 w-4" />
      </div>
      <div
        :class="props.currentTab === 'userInfo' ? '' : 'text-store-gray-dark'"
        class="inline-flex items-center"
      >
        <div class="leading-none">02 정보입력</div>
        <ChevronRightIcon class="mb-1 h-4 w-4" />
      </div>
      <div
        :class="props.currentTab === 'approval' ? '' : 'text-store-gray-dark'"
        class="inline-flex items-center"
      >
        <div class="leading-none">03 가입완료</div>
      </div>
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import Divider from "@/components/common/Divider";

const props = defineProps({
  currentTab: { type: String, default: "terms" },
});
</script>
