<template>
  <InnerLgLayout>
    <SignupHeader :current-tab="currentTab" />
    <Terms
      v-if="currentTab === 'terms'"
      :btn-click="goToUserInfo"
      :current-tab="currentTab"
    />
    <UserInfo
      v-if="currentTab === 'userInfo'"
      @completeSignUp="completeSignUp"
    />
    <Approval v-if="currentTab === 'approval'" />
  </InnerLgLayout>
</template>

<script setup>
import Terms from "@/pages/signup/Terms";
import SignupHeader from "@/components/signup/SignupHeader";
import { ref } from "vue";
import Approval from "@/pages/signup/Approval";
import UserInfo from "@/pages/signup/UserInfo";
import InnerLgLayout from "@/components/InnerLgLayout";

const currentTab = ref("terms");

const goToUserInfo = () => {
  currentTab.value = "userInfo";
};
const completeSignUp = () => {
  currentTab.value = "approval";
};
</script>
