<template>
  <div class="flex w-full items-center justify-center pt-[34px] pb-[48px]">
    <div class="w-full max-w-[630px] flex-col items-center justify-center">
      <UserInfoForm
        btn-text="중복확인"
        has-btn
        is-required
        label="userId"
        placeholder="아이디를 입력해주세요"
        text="아이디"
        type="text"
      />
      <UserInfoForm
        is-required
        label="password"
        placeholder="비밀번호를 입력해주세요"
        text="비밀번호"
        type="password"
      />
      <UserInfoForm
        is-required
        label="passwordCheck"
        margin="mb-[35px]"
        placeholder="비밀번호를 한번 더 입력해주세요"
        text="비밀번호 확인"
        type="password"
      />
      <UserInfoForm
        is-required
        label="name"
        placeholder="이름을 입력해주세요"
        text="이름"
        type="text"
      />
      <UserInfoForm
        label="email"
        placeholder="이메일을 입력해주세요"
        text="이메일"
        type="email"
      />
      <UserInfoForm
        btn-text="인증번호 받기"
        has-btn
        label="phoneNumber"
        margin="mb-[35px]"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        placeholder="휴대폰 번호를 입력해주세요"
        text="휴대폰 번호"
        type="number"
      />
      <UserInfoForm
        btn-text="우편번호 검색"
        has-btn
        label="postCode"
        text="주소"
        type="text"
      />
      <UserInfoForm is-wide label="address" type="text" />
      <UserInfoForm is-wide label="detailAddress" type="text" />
    </div>
  </div>
</template>

<script setup></script>
<script>
import UserInfoForm from "@/components/signup/userInfo/UserInfoForm";
import SubmitInput from "@/components/SubmitInput";

export default {
  components: { SubmitInput, UserInfoForm },
};
</script>
