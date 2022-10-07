<template>
  <div id="main-row" class="mt-10 flex w-full items-center justify-between">
    <!--			Web Logo-->
    <h1
      class="cursor-pointer text-5xl font-bold leading-none"
      @click="goToMain"
    >
      온니샵
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
import { useRouter } from "vue-router";

const router = useRouter();
const goToMain = () => {
  router.push("/");
};
</script>
