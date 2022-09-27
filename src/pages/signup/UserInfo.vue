<template>
  <div class="flex flex-col justify-center">
    <!--		top text-->
    <div>
      <div class="flex justify-center pb-[16px]">
        <span class="text-[24px] font-bold">회원가입</span>
      </div>
      <Divider />
      <div class="my-[12px] flex items-center justify-center gap-x-1">
        <div class="">
          <span class="align-baseline">01 약관동의</span>
        </div>
        <ChevronRightIcon class="h-4 w-4" />
        <div>
          <span class="align-baseline">02 정보입력</span>
        </div>
        <ChevronRightIcon class="h-4 w-4" />
        <div>
          <span class="align-baseline">03 가입완료</span>
        </div>
      </div>
      <Divider />
    </div>
    <!--		information input-->
    <UserInfoFormLayout />
    <Divider />
    <!--		terms-->
    <div class="flex w-full justify-center">
      <div class="grid w-full max-w-[630px] grid-cols-5">
        <div class="">이용약관동의</div>
        <div class="col-span-4">
          <UserInfoTerms />
          <SubmitBtn class="mt-[82px]" is-black is-submit shape="rd"
            >가입하기
          </SubmitBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitBtn from "@/components/SubmitBtn";
import Divider from "@/components/Divider";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import UserInfoFormLayout from "@/components/signup/userInfo/UserInfoFormLayout";
import UserInfoTerms from "@/components/signup/userInfo/UserInfoTerms";
</script>
