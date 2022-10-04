<template>
  <div class="mt-14 flex w-full flex-col items-center">
    <CheckCircleIcon class="h-36 w-36" />
    <div class="mt-6">
      <div class="text-xl text-gray-500">
        홍길동님의 회원가입 완료되었습니다.
      </div>
    </div>
    <div class="mt-20 flex justify-center space-x-2">
      <StoreBtn btn-size="md" route-to="/">홈 바로가기</StoreBtn>
      <StoreBtn btn-size="md" is-black route-to="/login">로그인 하기</StoreBtn>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import StoreBtn from "@/components/StoreBtn";
</script>
