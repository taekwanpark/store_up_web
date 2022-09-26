<template>
  <header class="h-[286px] w-full">
    <!--		login + service center-->
    <div id="second-row" class="mt-[10px]">
      <ControlBox />
    </div>
    <!--		title + search + myPage-->
    <div id="third-row" class="mt-[38px] flex h-[56px] justify-between">
      <!--			Web Logo-->
      <div class="text-[45px] font-bold leading-none">온니샵</div>
      <!--			Search-->
      <SearchBox />
      <!--			profile + cart + heart-->
      <ProfileBox />
    </div>
    <nav>카테고리 베스트 신상품</nav>
  </header>
</template>

<script setup>
import ControlBox from "@/components/header/ControlBox";
import SearchBox from "@/components/header/SearchBox";
import ProfileBox from "@/components/header/ProfileBox";
</script>
