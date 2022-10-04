<template>
  <div class="flex flex-col items-center justify-center">
    <!--		이용약관-->
    <div class="mb-20 flex flex-col gap-y-20">
      <Term is-required title="이용약관" />
      <Term is-required title="개인정보 수집 및 이용동의" />
      <Term title="개인정보 제 3자 제공 동의" />
    </div>
    <Divider />
    <div class="mt-6 flex w-full flex-col items-center justify-center">
      <FormKit
        :classes="{
          label: '$reset text-black font-medium',
        }"
        label="위 모든 항목에 모두 동의합니다."
        type="checkbox"
      />

      <div class="mt-16 flex justify-center gap-x-2">
        <StoreBtn btn-size="sm" route-to="/">취소</StoreBtn>
        <StoreBtn btn-size="sm" is-black @click="props.btnClick"
          >다음 단계
        </StoreBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divider from "@/components/Divider";
import Term from "@/components/signup/terms/Term";
import StoreBtn from "@/components/StoreBtn";

const props = defineProps({
  currentTab: String,
  btnClick: Function,
});
</script>
