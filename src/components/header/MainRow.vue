<template>
  <div id="main-row" class="mt-10 flex w-full items-center justify-between">
    <!--			Web Logo-->
    <h1 class="text-5xl font-bold leading-none">온니샵</h1>
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
