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
import Terms from "@/components/signup/terms/Terms";
import SignupHeader from "@/components/signup/SignupHeader";
import { ref } from "vue";
import Approval from "@/components/signup/Approval";
import UserInfo from "@/components/signup/userInfo/UserInfo";
import InnerLgLayout from "@/components/layouts/InnerLgLayout";

const currentTab = ref("terms");

const goToUserInfo = () => {
  currentTab.value = "userInfo";
};
const completeSignUp = () => {
  currentTab.value = "approval";
};
</script>
