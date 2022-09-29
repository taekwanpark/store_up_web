<template>
  <div class="flex w-full justify-center">
    <InnerXsLayout>
      <div class="flex h-full w-full flex-col items-center justify-center">
        <div class="mb-11 text-2xl font-bold">비밀번호 찾기</div>
        <IdFind
          v-if="currentTab === 'find'"
          :show-certification="showCertification"
          @certificate="certificate"
          @findId="findId"
        />
        <IdFound v-if="currentTab === 'found'" />
      </div>
    </InnerXsLayout>
  </div>
  <Modal
    :is-open="isOpen"
    text="인증번호가 발송되었습니다."
    @closeModal="closeModal"
  />
</template>

<script setup>
import { ref } from "vue";
import IdFind from "@/pages/inquiry/IdFind";
import Modal from "@/components/Modal";
import IdFound from "@/pages/inquiry/IdFound";
import InnerXsLayout from "@/components/InnerXsLayout";

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
