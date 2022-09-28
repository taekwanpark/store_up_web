<template>
  <div class="mt-[60px] flex w-full flex-col items-center">
    <CheckCircleIcon class="h-[130px] w-[130px]" />
    <div class="mt-[22px]">
      <div class="text-[20px] text-amuzGray-707070">
        홍길동님의 회원가입 완료되었습니다.
      </div>
    </div>
    <div class="mt-[55px] flex w-full justify-center space-x-[15px]">
      <SubmitBtn route-to="/" shape="rd" size="md">홈 바로가기</SubmitBtn>
      <SubmitBtn is-black route-to="/login" shape="rd" size="md"
        >로그인 하기
      </SubmitBtn>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import SubmitBtn from "@/components/SubmitBtn";
</script>
