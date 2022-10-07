<template>
  <form
    id="newPassword"
    action="/inquiry/id"
    class="mb-6 flex w-full flex-col gap-y-2"
  >
    <FormKit
      :validation-messages="{
        length: '비밀번호를 8자 이상 입력해주세요',
        required: '새 비밀번호를 입력해주세요',
      }"
      name="password"
      placeholder="새 비밀번호를 입력해주세요"
      type="password"
      validation="required|length:8"
    />
    <FormKit
      :validation-messages="{
        confirm: '비밀번호가 다릅니다.',
        length: '비밀번호를 8자 이상 입력해주세요',
        required: '새 비밀번호를 한번 더 입력해주세요',
      }"
      name="password_confirm"
      placeholder="새 비밀번호를 한번 더 입력해주세요"
      type="password"
      validation="[['required'], ['confirm'], ['length:8']]"
    />
  </form>
  <StoreBtn is-black @btn-click="changePw">확인</StoreBtn>
</template>

<script setup>
import StoreBtn from "@/components/common/StoreBtn";

const emits = defineEmits(["changePw"]);
const changePw = () => {
  emits("changePw");
};
</script>
