<template>
  <div class="w-full space-y-[16px]">
    <div class="flex items-start gap-x-2">
      <FormKit
        v-model="totalAgree"
        :options="[
          {
            value: 'total',
            label: '전체 동의합니다.',
            help: '선택항목애 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할수 있습니다.',
          },
          {
            value: 'service',
            label: '이용약관 동의(필수)',
            // attrs: { disabled: true }
          },
          {
            value: 'privacy',
            label: '개인정보 수집·이용 동의(필수)',
          },
          {
            value: 'financial',
            label: '전자금융거래약관(필수)',
          },
          {
            value: 'age_limit',
            label: '본인은 만 14세 이상입니다.(필수)',
          },
          {
            value: 'advertisement',
            label: '혜택 정보 및 광고 수신 동의(선택)',
          },
        ]"
        name="terms"
        option-help-class="text-store-gray-dark ml-7 text-sm whitespace-nowrap"
        options-class="flex flex-col gap-5"
        type="checkbox"
        validation="accepted"
        validation-visibility="dirty"
        @change="changeBlack"
      />
    </div>
    <!--    <FormKit-->
    <!--      label="이용약관 동의(필수)"-->
    <!--      name="service_terms"-->
    <!--      type="checkbox"-->
    <!--      validation="accepted"-->
    <!--      validation-visibility="dirty"-->
    <!--    />-->

    <!--    <FormKit-->
    <!--      label="개인정보 수집·이용 동의(필수)"-->
    <!--      name="privacy_terms"-->
    <!--      type="checkbox"-->
    <!--      validation="accepted"-->
    <!--      validation-visibility="dirty"-->
    <!--    />-->
    <!--    <FormKit-->
    <!--      label="전자금융거래약관(필수)"-->
    <!--      name="financial_terms"-->
    <!--      type="checkbox"-->
    <!--      validation="accepted"-->
    <!--      validation-visibility="dirty"-->
    <!--    />-->
    <!--    <FormKit-->
    <!--      label="본인은 만 14세 이상입니다.(필수)"-->
    <!--      name="age_limit_terms"-->
    <!--      type="checkbox"-->
    <!--      validation="accepted"-->
    <!--      validation-visibility="dirty"-->
    <!--    />-->
    <!--    <FormKit-->
    <!--      label="혜택 정보 및 광고 수신 동의(선택)"-->
    <!--      name="advertisement_terms"-->
    <!--      type="checkbox"-->
    <!--    />-->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const totalAgree = ref([]);
const changeBlack = () => {
  console.log(totalAgree.value);
};
watch(totalAgree, (checked) => {
  console.log(checked);
});
</script>
<style>
.totalAgree > .formkit-label {
  @apply text-red-500;
}
</style>
