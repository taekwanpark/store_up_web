<template>
  <div class="flex flex-col items-center justify-center">
    <!--		information input-->
    <InnerSmLayout>
      <UserInfoFormLayout />
    </InnerSmLayout>

    <Divider />
    <!--		terms-->
    <InnerSmLayout>
      <div class="my-4 flex w-full justify-center">
        <div class="grid grid-cols-5">
          <div class="whitespace-nowrap">이용약관동의</div>
          <div class="col-span-4">
            <UserInfoTerms />
          </div>
        </div>
      </div>
      <div class="mt-16 flex w-full justify-center">
        <TwBtn btn-size="xl" is-black="black" @click="completeSignUp"
          >가입하기
        </TwBtn>
      </div>
    </InnerSmLayout>
  </div>
  <Modal
    :is-open="isOpen"
    text="사용 불가능한 아이디입니다."
    @closeModal="closeModal"
  />
</template>

<script setup>
import Divider from "@/components/Divider";
import UserInfoFormLayout from "@/components/signup/userInfo/UserInfoFormLayout";
import UserInfoTerms from "@/components/signup/userInfo/UserInfoTerms";
import Modal from "@/components/Modal";
import InnerSmLayout from "@/components/InnerSmLayout";
import TwBtn from "@/components/TwBtn";
import { ref } from "vue";

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
const emits = defineEmits(["completeSignUp"]);
const completeSignUp = () => {
  emits("completeSignUp");
};
</script>
