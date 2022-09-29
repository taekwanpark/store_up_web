<template>
  <div class="flex w-full justify-center">
    <div
      class="flex h-full w-full max-w-[360px] flex-col items-center justify-center"
    >
      <div class="mb-[45px] text-[24px] font-bold">아이디 찾기</div>
      <div class="flex w-full flex-col gap-y-[13px]">
        <SubmitInput placeholder="이름을 입력해주세요" />
        <div class="grid grid-cols-4 gap-x-[10px]">
          <div class="col-span-3">
            <SubmitInput placeholder="휴대폰 번호를 입력해주세요" />
          </div>
          <div>
            <SubmitBtn shape="rd" size="full" @click="openModal"
              >인증
            </SubmitBtn>
          </div>
        </div>
        <div v-if="showCertification" class="grid grid-cols-4 gap-x-[10px]">
          <div class="col-span-3">
            <SubmitInput placeholder="인증 번호를 입력해주세요" />
          </div>
          <div>
            <SubmitBtn shape="rd" size="full" @click="openModal"
              >재발송
            </SubmitBtn>
          </div>
        </div>
        <div v-if="showCertification" class="h-[57px]">
          <SubmitBtn is-black shape="rd" size="full">아이디 찾기</SubmitBtn>
        </div>
      </div>
    </div>
  </div>
  <Modal
    :is-open="isOpen"
    text="인증번호가 발송되었습니다."
    @closeModal="closeModal"
  />
</template>

<script setup>
import SubmitInput from "@/components/SubmitInput";
import SubmitBtn from "@/components/SubmitBtn";
import Modal from "@/components/Modal";
import { ref } from "vue";

const isOpen = ref(false);
const showCertification = ref(true);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
  showCertification.value = true;
};
</script>
