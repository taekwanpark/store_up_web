<template>
  <div id="main-row" class="mt-10 flex w-full items-center justify-between">
    <!--			Web Logo-->
    <h1 class="cursor-pointer text-5xl font-bold leading-none">
      <RouterLink :to="{ name: main }">온니샵</RouterLink>
    </h1>
    <!--			Search-->
    <SearchRow />
    <!--			profile + cart + heart-->
    <ProfileRow />
  </div>
</template>

<script setup>
import SearchRow from "@/components/common/header/SearchBox";
import ProfileRow from "@/components/common/header/ProfileBox";

const main = process.env.STORE_MAIN;
</script>
