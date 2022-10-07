<template>
  <div class="mt-3 flex w-full justify-end gap-x-4">
    <div
      class="cursor-pointer text-left text-xs font-normal text-store-gray-extraDark"
    >
      <RouterLink :to="{ name: login }">로그인</RouterLink>
    </div>
    <div
      class="cursor-pointer text-left text-xs font-normal text-store-gray-extraDark"
    >
      주문조회
      <RouterLink :to="{ name: login }">주문조회</RouterLink>
    </div>
    <div
      class="cursor-pointer text-left text-xs font-normal text-store-gray-extraDark"
    >
      고객센터
      <RouterLink :to="{ name: login }">고객센터</RouterLink>
    </div>
  </div>
</template>

<script setup>
const login = process.env.STORE_MEMBER_LOGIN;
</script>
