<template>
  <InnerXsLayout>
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="mb-11 text-2xl font-bold">비밀번호 찾기</div>
      <PasswordFind
        v-if="currentTab === 'find'"
        :show-certification="showCertification"
        @certificate="certificate"
        @findPw="findPw"
      />
      <ResetPassword v-if="currentTab === 'found'" @change-pw="changePw" />
    </div>
  </InnerXsLayout>
  <Modal :is-open="isOpen" :text="modalText" @closeModal="closeModal" />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "@/components/Modal";
import InnerXsLayout from "@/components/layouts/InnerXsLayout";
import PasswordFind from "@/components/member/find/password/FindPasswordComponent";
import ResetPassword from "@/components/member/find/password/ResetPasswordComponent";

const router = useRouter();
const isOpen = ref(false);
const currentTab = ref("find");
const showCertification = ref(false);
const modalText = ref("");

const changePw = () => {
  modalText.value = "비밀번호 변경이 완료되었습니다.";
  isOpen.value = true;
};

const certificate = () => {
  modalText.value = "인증번호가 발송되었습니다.";
  isOpen.value = true;
};

const findPw = () => {
  currentTab.value = "found";
};
const closeModal = () => {
  isOpen.value = false;
  showCertification.value = true;
  if (currentTab.value === "found") {
    router.push("/login");
  }
};
</script>
