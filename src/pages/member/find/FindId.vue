<template>
  <InnerXsLayout>
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="mb-11 text-2xl font-bold">아이디 찾기</div>
      <IdFind
        v-if="currentTab === 'find'"
        :show-certification="showCertification"
        @certificate="certificate"
        @findId="findId"
      />
      <IdFound v-if="currentTab === 'found'" />
    </div>
  </InnerXsLayout>
  <Modal
    :is-open="isOpen"
    text="인증번호가 발송되었습니다."
    @closeModal="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import IdFind from "@/components/member/find/id/FindIdComponent";
import Modal from "@/components/common/Modal";
import IdFound from "@/components/member/find/id/FoundIdComponent";
import InnerXsLayout from "@/components/common/layouts/InnerXsLayout";

const isOpen = ref(false);
const currentTab = ref("find");
const showCertification = ref(false);

const certificate = () => {
  isOpen.value = true;
};
const findId = () => {
  currentTab.value = "found";
};
const closeModal = () => {
  isOpen.value = false;
  showCertification.value = true;
};
</script>
