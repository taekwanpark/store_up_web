<template>
  <div class="mt-[34px] flex flex-col justify-center">
    <!--		이용약관-->
    <div class="flex flex-col gap-y-[73px]">
      <Term is-required title="이용약관" />
      <Term is-required title="개인정보 수집 및 이용동의" />
      <Term title="개인정보 제 3자 제공 동의" />
    </div>
    <Divider />
    <div class="mt-[40px] flex w-full flex-col items-center justify-center">
      <FormKit
        :classes="{
          label: '$reset text-black font-medium',
        }"
        label="위 모든 항목에 모두 동의합니다."
        type="checkbox"
      />
      <div class="mt-[29px] flex w-full justify-center space-x-[9px]">
        <SubmitBtn class="" shape="sq" size="sm">취소</SubmitBtn>
        <SubmitBtn
          class=""
          is-black
          shape="sq"
          size="sm"
          @click="props.btnClick"
          >다음 단계
        </SubmitBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitBtn from "@/components/SubmitBtn";
import Divider from "@/components/Divider";
import Term from "@/components/signup/terms/Term";

const props = defineProps({
  currentTab: String,
  btnClick: Function,
});
</script>
