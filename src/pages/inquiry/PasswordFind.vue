<template>
  <div class="flex w-full flex-col gap-y-2">
    <TwInput placeholder="이름을 입력해주세요" />
    <div class="grid grid-cols-4 gap-x-2">
      <div class="col-span-3">
        <TwInput placeholder="휴대폰 번호를 입력해주세요" />
      </div>
      <div>
        <TwBtn btn-size="xxs" @click="certificate">인증</TwBtn>
      </div>
    </div>
    <div v-if="showCertification" class="grid grid-cols-4 gap-x-2">
      <div class="col-span-3">
        <TwInput placeholder="인증 번호를 입력해주세요" />
      </div>
      <div>
        <TwBtn btn-size="xxs" @click="certificate">재발송</TwBtn>
      </div>
    </div>
    <div v-if="showCertification" class="mt-6 h-[50px]">
      <SubmitBtn is-black shape="rd" size="full" @click="findId"
        >아이디 찾기
      </SubmitBtn>
    </div>
  </div>
</template>

<script setup>
import SubmitBtn from "@/components/SubmitBtn";
import TwInput from "@/components/TwInput";
import TwBtn from "@/components/TwBtn";

const props = defineProps({
  isOpen: Boolean,
  showCertification: Boolean,
});

const emits = defineEmits(["certificate", "findId"]);
const certificate = () => {
  emits("certificate");
};
const findId = () => {
  emits("findId");
};
</script>
