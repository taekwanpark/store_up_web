<template>
  <div class="flex flex-col justify-center">
    <!--		information input-->
    <UserInfoFormLayout />
    <Divider />
    <!--		terms-->
    <div class="mt-[60px] flex w-full justify-center">
      <div class="flex w-[630px]">
        <div class="whitespace-nowrap pr-[50px]">이용약관동의</div>
        <div class="">
          <UserInfoTerms />
          <SubmitBtn class="mt-[82px]" is-black is-submit shape="rd"
            >가입하기
          </SubmitBtn>
        </div>
      </div>
    </div>
  </div>
  <Modal text="사용 불가능한 아이디입니다." />
</template>

<script setup>
import SubmitBtn from "@/components/SubmitBtn";
import Divider from "@/components/Divider";
import UserInfoFormLayout from "@/components/signup/userInfo/UserInfoFormLayout";
import UserInfoTerms from "@/components/signup/userInfo/UserInfoTerms";
import Modal from "@/components/Modal";
</script>
