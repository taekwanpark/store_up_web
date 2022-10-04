<template>
  <div class="mb-20 flex flex-col items-center justify-center">
    <!--		information input-->
    <InnerSmLayout>
      <div class="mb-20 flex flex-col gap-y-2">
        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="아이디" type="text"></FormKit>
          </div>
          <StoreBtn btn-size="sm" text-size="sm">중복확인</StoreBtn>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="비밀번호" type="password"></FormKit>
          </div>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="비밀번호 확인" type="password"></FormKit>
          </div>
        </div>

        <br />

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="이름" type="text"></FormKit>
          </div>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="이메일" type="email"></FormKit>
          </div>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="휴대폰 번호" type="number"></FormKit>
          </div>
          <StoreBtn btn-size="sm" text-size="sm">인증번호 받기</StoreBtn>
        </div>

        <br />

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="col-span-4">
            <FormKit label="배송 주소" type="text"></FormKit>
          </div>
          <StoreBtn btn-size="sm" text-size="sm">우편번호 검색</StoreBtn>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="invisible"></div>
          <div class="col-span-4">
            <FormKit
              label="배송 주소2"
              label-class="hidden"
              type="text"
            ></FormKit>
          </div>
        </div>

        <div class="grid w-full grid-cols-5 gap-x-2">
          <div class="invisible"></div>
          <div class="col-span-4">
            <FormKit
              label="배송 주소3"
              label-class="hidden"
              type="text"
            ></FormKit>
          </div>
        </div>
      </div>
    </InnerSmLayout>

    <Divider />
    <!--		terms-->
    <InnerSmLayout>
      <div class="mt-10 grid grid-cols-5">
        <div class="whitespace-nowrap">이용약관동의</div>
        <div class="col-span-4">
          <div class="flex flex-col space-y-20">
            <UserInfoTerms />
            <StoreBtn btn-size="xl" is-black @click="completeSignUp"
              >가입하기
            </StoreBtn>
          </div>
        </div>
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
import UserInfoTerms from "@/components/signup/userInfo/UserInfoTerms";
import Modal from "@/components/Modal";
import InnerSmLayout from "@/components/layouts/InnerSmLayout";
import { ref } from "vue";
import StoreBtn from "@/components/StoreBtn";

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
const emits = defineEmits(["completeSignUp"]);
const completeSignUp = () => {
  emits("completeSignUp");
};
</script>
