<template>
  <div class="mt-14 flex w-full flex-col items-center">
    <CheckCircleIcon class="h-36 w-36" />
    <div class="mt-6">
      <div class="text-xl text-amuzGray-707070">
        홍길동님의 회원가입 완료되었습니다.
      </div>
    </div>
    <div class="mt-20 flex w-full justify-center space-x-[15px]">
      <TwBtn btn-size="md" route-to="/">홈 바로가기</TwBtn>
      <TwBtn btn-size="md" is-black="black" route-to="/login"
        >로그인 하기
      </TwBtn>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import TwBtn from "@/components/TwBtn";
</script>
