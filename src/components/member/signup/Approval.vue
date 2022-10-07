<template>
  <div class="mt-14 flex w-full flex-col items-center">
    <CheckCircleIcon class="h-36 w-36" />
    <div class="mt-6">
      <div class="text-xl text-store-gray-extraDark">
        홍길동님의 회원가입 완료되었습니다.
      </div>
    </div>
    <div class="mt-20 flex justify-center space-x-2">
      <StoreLinkBtn :route-to="main" btn-size="md">홈 바로가기</StoreLinkBtn>
      <StoreLinkBtn :route-to="login" btn-size="md" is-black
        >로그인 하기
      </StoreLinkBtn>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import StoreLinkBtn from "@/components/common/StoreLinkBtn";

const main = process.env.STORE_MAIN;
const login = process.env.STORE_MEMBER_LOGIN;
</script>
