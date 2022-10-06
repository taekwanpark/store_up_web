<template>
  <div class="w-full space-y-[16px]">
    <div class="flex items-start gap-x-2">
      <FormKit
        :label-class="{
          'text-black': true,
          'text-store-gray-dark': false,
        }"
        help="선택항목애 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
          수 있습니다."
        label="전체 동의합니다."
        name="total_terms"
        type="checkbox"
        validation="accepted"
        validation-visibility="dirty"
      />
    </div>
    <FormKit
      label="이용약관 동의(필수)"
      name="service_terms"
      type="checkbox"
      validation="accepted"
      validation-visibility="dirty"
    />

    <FormKit
      label="개인정보 수집·이용 동의(필수)"
      name="privacy_terms"
      type="checkbox"
      validation="accepted"
      validation-visibility="dirty"
    />
    <FormKit
      label="전자금융거래약관(필수)"
      name="financial_terms"
      type="checkbox"
      validation="accepted"
      validation-visibility="dirty"
    />
    <FormKit
      label="본인은 만 14세 이상입니다.(필수)"
      name="age_limit_terms"
      type="checkbox"
      validation="accepted"
      validation-visibility="dirty"
    />
    <FormKit
      label="혜택 정보 및 광고 수신 동의(선택)"
      name="advertisement_terms"
      type="checkbox"
    />
  </div>
</template>

<script setup></script>
