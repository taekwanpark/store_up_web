<template>
  <div class="flex w-full flex-col gap-y-2">
    <div class="flex flex-col justify-center">
      <div class="mb-2 text-lg tracking-tighter">
        고객님의 정보와 일치하는 아이디는 아래와 같습니다.
      </div>
      <div class="text-gray-500">아이디 확인 후 로그인해 주세요.</div>
      <div class="mt-8 flex items-center gap-x-4">
        <div class="flex items-center justify-center">
          <UserCircleIcon class="h-12 w-12" />
        </div>
        <div>
          <div class="text-lg">abcd1234</div>
          <div class="text-sm text-gray-400">가입일 2022.07.30</div>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-y-2">
        <StoreBtn is-black route-to="/login">로그인하기</StoreBtn>
        <StoreBtn>비밀번호 찾기</StoreBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/outline";
import StoreBtn from "@/components/common/StoreBtn";
</script>
<script></script>
