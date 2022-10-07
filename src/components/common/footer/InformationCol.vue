<template>
  <div class="ml-24 w-auto">
    <!--			company name-->
    <div class="">
      <span class="text-xl font-medium">온니샵</span>
    </div>
    <!--			information-->
    <div class="mt-4 flex flex-col gap-y-2 font-light">
      <div class="flex items-center gap-x-5">
        <span>상호명 : 온니샵</span>
        <span>대표 : 홍길동</span>
        <span>대표전화 : 000-0000</span>
      </div>
      <div class="flex items-center gap-x-5">
        <span>통신판매업 신고번호 : 제0000-부산사하-0000호</span>
        <span>사업자 등록번호 : 000-00-00000</span>
      </div>
      <div class="flex items-center gap-x-5">
        <span>주소 : 부산광역시 사하구 괴정동 1010</span>
        <span>개인정보 처리 책임자 : 홍길동 (abcd@naver.com)</span>
      </div>
    </div>
    <!--			link-->
    <div class="mt-4">
      <div class="cursor-pointer">
        <Instagram />
      </div>
    </div>

    <!--			copyright-->
    <div class="mt-4">
      <span class="text-4 font-light"
        >Copyright(c) Buanmall.com. All Rights Reserved.</span
      >
    </div>
  </div>
</template>

<script setup>
import Instagram from "@/assets/icons/Instagram";
</script>
