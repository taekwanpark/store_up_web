<template>
  <div class="flex justify-center pb-4">
    <span class="text-[24px] font-bold">회원가입</span>
  </div>
  <Divider />
  <div class="my-3 flex items-center justify-center gap-x-1">
    <div
      :class="props.currentTab === 'terms' ? '' : 'text-amuzGray-d2d2d2'"
      class="inline-flex items-center"
    >
      <div>
        <span>02 정보입력</span>
      </div>
      <ChevronRightIcon class="h-4 w-4" />
    </div>
    <div
      :class="props.currentTab === 'userInfo' ? '' : 'text-amuzGray-d2d2d2'"
      class="inline-flex items-center"
    >
      <div>
        <span>01 약관동의</span>
      </div>
      <ChevronRightIcon class="h-4 w-4" />
    </div>
    <div
      :class="props.currentTab === 'approval' ? '' : 'text-amuzGray-d2d2d2'"
      class="inline-flex items-center"
    >
      <div>
        <span>03 가입완료</span>
      </div>
    </div>
  </div>
  <Divider />
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import Divider from "@/components/Divider";

const props = defineProps({
  currentTab: { type: String, default: "terms" },
});
</script>
