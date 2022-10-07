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
import Terms from "@/components/member/signup/terms/Terms";
import SignupHeader from "@/components/member/signup/SignupHeader";
import { ref } from "vue";
import Approval from "@/components/member/signup/Approval";
import UserInfo from "@/components/member/signup/userInfo/UserInfo";
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";

const currentTab = ref("terms");

const goToUserInfo = () => {
  currentTab.value = "userInfo";
};
const completeSignUp = () => {
  currentTab.value = "approval";
};
</script>
