<template>
  <SignupHeader />
  <Terms
    v-if="currentTab === 'terms'"
    :btn-click="goToUserInfo"
    :current-tab="currentTab"
  />
  <UserInfo v-if="currentTab === 'userInfo'" />
  <Approval v-if="currentTab === 'approval'" />
</template>

<script setup>
import Terms from "@/pages/signup/Terms";
import SignupHeader from "@/components/signup/SignupHeader";
import { ref } from "vue";
import Approval from "@/pages/signup/Approval";
import UserInfo from "@/pages/signup/UserInfo";

const currentTab = ref("approval");

const goToUserInfo = () => {
  currentTab.value = "userInfo";
};
</script>
