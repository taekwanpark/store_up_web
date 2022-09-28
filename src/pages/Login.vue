<template>
  <div
    class="m-auto flex min-h-full flex-col items-center justify-center py-10"
  >
    <div>
      <span class="text-[24px] font-bold leading-[35px]">로그인</span>
    </div>

    <div class="mt-[31px] w-full max-w-[360px]">
      <div class="w-full">
        <form action="#" class="" method="POST">
          <div class="">
            <SubmitInput
              for="userId"
              placeholder="아이디를 입력해주세요"
              type="text"
            />
          </div>

          <div class="mt-[10px]">
            <SubmitInput
              for="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </div>

          <div class="mt-[10px] flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                class="h-4 w-4 rounded border-amuzGray-707070 focus:ring-indigo-500"
                name="remember-me"
                type="checkbox"
              />
              <label
                class="ml-[5px] block text-[14px] leading-[14px] tracking-[-0.35px] text-black"
                for="remember-me"
                >아이디 저장</label
              >
            </div>

            <div class="flex items-center space-x-2">
              <a
                class="text-[14px] leading-[14px] tracking-[-0.35px] text-black"
                href="#"
                >아이디 찾기</a
              >
              <span class="inline-block h-[14px] border-r border-black"></span>
              <a
                class="text-[14px] leading-[14px] tracking-[-0.35px] text-black"
                href="#"
                >비밀번호 찾기</a
              >
            </div>
          </div>

          <div class="mt-[48px] space-y-[8px]">
            <SubmitBtn is-black is-submit shape="rd">로그인</SubmitBtn>
            <SubmitBtn route-to="/signup" shape="rd">회원가입</SubmitBtn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitBtn from "@/components/SubmitBtn";
import SubmitInput from "@/components/SubmitInput";
</script>
<script></script>
