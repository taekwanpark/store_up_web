<template>
  <div class="w-full space-y-[16px]">
    <div class="flex items-start gap-x-[6px]">
      <CheckCircleIcon class="h-6 w-6 text-amuzGray-E9E9E" />
      <p>
        <label class="text-[18px] font-medium">전체 동의합니다.</label>
        <br />
        <span
          class="whitespace-nowrap font-medium leading-[26px] text-amuzGray-E9E9E"
        >
          선택항목애 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
          수 있습니다.
        </span>
      </p>
    </div>
    <div class="flex items-center gap-x-[6px]">
      <CheckCircleIcon class="text h-6 w-6 text-amuzGray-E9E9E" />
      <label class="font-medium text-amuzGray-E9E9E">
        이용약관 동의 (필수)
      </label>
    </div>
    <div class="flex items-center gap-x-[6px]">
      <CheckCircleIcon class="text h-6 w-6 text-amuzGray-E9E9E" />
      <label class="font-medium text-amuzGray-E9E9E">
        개인정보 수집·이용 동의(필수)
      </label>
    </div>
    <div class="flex items-center gap-x-[6px]">
      <CheckCircleIcon class="text h-6 w-6 text-amuzGray-E9E9E" />
      <label class="font-medium text-amuzGray-E9E9E">
        전자금융거래약관(필수)
      </label>
    </div>
    <div class="flex items-center gap-x-[6px]">
      <CheckCircleIcon class="text h-6 w-6 text-amuzGray-E9E9E" />
      <label class="font-medium text-amuzGray-E9E9E">
        혜택 정보 및 광고 수신 동의(선택)
      </label>
    </div>
    <div class="flex items-center gap-x-[6px]">
      <CheckCircleIcon class="text h-6 w-6 text-amuzGray-E9E9E" />
      <label class="font-medium text-amuzGray-E9E9E">
        본인은 만 14세 이상입니다.(필수)
      </label>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
</script>
