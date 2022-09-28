<template>
  <div>
    <div class="flex justify-center pb-[16px]">
      <span class="text-[24px] font-bold">회원가입</span>
    </div>
    <Divider />
    <div class="my-[12px] flex items-center justify-center gap-x-1">
      <div class="">
        <span class="align-baseline">01 약관동의</span>
      </div>
      <ChevronRightIcon class="h-4 w-4" />
      <div>
        <span class="align-baseline">02 정보입력</span>
      </div>
      <ChevronRightIcon class="h-4 w-4" />
      <div>
        <span class="align-baseline">03 가입완료</span>
      </div>
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import Divider from "@/components/Divider";
</script>
