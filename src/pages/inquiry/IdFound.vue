<template>
  <div class="flex w-full flex-col items-center gap-y-2">
    <div class="flex min-w-fit flex-col justify-center">
      <div class="mb-2 whitespace-nowrap text-lg">
        고객님의 정보와 일치하는 아이디는 아래와 같습니다.
      </div>
      <div class="text-amuzGray-707070">아이디 확인 후 로그인해 주세요.</div>
      <div class="mt-8 flex items-center gap-x-4">
        <div class="flex items-center justify-center">
          <UserCircleIcon class="h-12 w-12" />
        </div>
        <div>
          <div class="text-lg">abcd1234</div>
          <div class="text-sm text-amuzGray-707070">가입일 2022.07.30</div>
        </div>
      </div>
      <div class="mt-20 flex flex-col gap-y-2">
        <TwBtn btn-size="xl" is-black="black" route-to="/login"
          >로그인하기
        </TwBtn>
        <TwBtn btn-size="xl">비밀번호 찾기</TwBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import TwBtn from "@/components/TwBtn";
import { UserCircleIcon } from "@heroicons/vue/24/outline";
</script>
<script></script>
