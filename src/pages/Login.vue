<template>
  <InnerXsLayout>
    <div class="flex w-full flex-col items-center justify-center">
      <div>
        <span class="w-full text-2xl font-bold">로그인</span>
      </div>

      <div class="mt-11 w-full">
        <div class="w-full">
          <form action="#" class="w-full" method="POST">
            <div class="flex w-full flex-col gap-y-2">
              <TwInput
                label="아이디"
                label-class="hidden"
                placeholder="아이디를 입력해주세요"
              />
              <TwInput
                label="비밀번호"
                label-class="hidden"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div class="mt-2 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  class="h-4 w-4 rounded border-amuzGray-707070 focus:ring-indigo-500"
                  name="remember-me"
                  type="checkbox"
                />
                <label class="ml-1 block text-sm text-black" for="remember-me"
                  >아이디 저장</label
                >
              </div>

              <div class="flex items-center space-x-2">
                <RouterLink class="text-sm" to="/inquiry/id"
                  >아이디 찾기
                </RouterLink>
                <span class="inline-block h-3 border-r border-black"></span>
                <RouterLink class="text-sm" to="/inquiry/password"
                  >비밀번호 찾기
                </RouterLink>
              </div>
            </div>

            <div class="mt-12 flex items-center gap-x-2">
              <TwBtn btn-size="sm" is-black="black" is-submit>로그인</TwBtn>
              <TwBtn btn-size="sm" route-to="/signup">회원가입</TwBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </InnerXsLayout>
</template>

<script setup>
import TwBtn from "@/components/TwBtn";
import InnerXsLayout from "@/components/InnerXsLayout";
import TwInput from "@/components/TwInput";
</script>
<script></script>
