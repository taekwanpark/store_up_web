<template>
  <div
    id="main-row"
    class="mt-[38px] flex flex h-[56px] w-full justify-between"
  >
    <!--			Web Logo-->
    <h1 class="text-[45px] font-bold leading-none">온니샵</h1>
    <!--			Search-->
    <SearchRow />
    <!--			profile + cart + heart-->
    <ProfileRow />
  </div>
</template>

<script setup>
import SearchRow from "@/components/header/SearchBox";
import ProfileRow from "@/components/header/ProfileBox";
</script>
