<template>
  <div class="flex w-full flex-col gap-y-2">
    <FormKit placeholder="아이디를 입력해주세요" type="text" />
    <FormKit placeholder="이름을 입력해주세요" type="text" />
    <div class="grid grid-cols-4 gap-x-2">
      <div class="col-span-3">
        <FormKit placeholder="휴대폰 번호를 입력해주세요" type="number" />
      </div>
      <div>
        <StoreBtn @click="certificate">인증</StoreBtn>
      </div>
    </div>

    <div v-if="showCertification" class="grid grid-cols-4 gap-x-2">
      <div class="col-span-3">
        <FormKit placeholder="인증 번호를 입력해주세요" type="number" />
      </div>
      <div>
        <StoreBtn @click="certificate">재발송</StoreBtn>
      </div>
    </div>
    <div v-if="showCertification" class="mt-6 h-[50px]">
      <StoreBtn is-black @click="findPw">비밀번호 찾기</StoreBtn>
    </div>
  </div>
</template>

<script setup>
import StoreBtn from "@/components/StoreBtn";

const props = defineProps({
  showCertification: Boolean,
});

const emits = defineEmits(["certificate", "findPw"]);
const certificate = () => {
  emits("certificate");
};
const findPw = () => {
  emits("findPw");
};
</script>
