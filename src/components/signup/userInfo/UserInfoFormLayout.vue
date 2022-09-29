<template>
  <div class="my-12 flex w-full flex-col items-center justify-center gap-y-2">
    <UserInfoForm
      btn-text="중복확인"
      input-label="아이디"
      input-ph="아이디를 입력해주세요"
    />
    <UserInfoForm input-label="비밀번호" input-ph="비밀번호를 입력해주세요" />
    <UserInfoForm
      input-label="비밀번호 확인"
      input-ph="비밀번호를 한번 더 입력해주세요"
      mb
    />
    <UserInfoForm input-label="이름" input-ph="이름을 입력해주세요" />
    <UserInfoForm input-label="이메일" input-ph="이메일을 입력해주세요" />
    <UserInfoForm
      btn-text="인증번호 받기"
      input-label="휴대폰 번호"
      input-ph="휴대폰 번호를 입력해주세요"
    />
    <UserInfoForm btn-text="우편 번호 검색" input-label="배송 주소" />
  </div>
</template>

<script setup>
import UserInfoForm from "@/components/signup/userInfo/UserInfoForm";
</script>
