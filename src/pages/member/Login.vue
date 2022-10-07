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
              <FormKit
                label="userId"
                label-class="hidden"
                placeholder="아이디를 입력해주세요"
                type="text"
              />
              <FormKit
                label="Password"
                label-class="hidden"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </div>
            <div class="mt-2 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  class="h-4 w-4 rounded border-store-gray-extraDark focus:ring-indigo-500"
                  name="remember-me"
                  type="checkbox"
                />
                <label class="ml-1 block text-xs text-black" for="remember-me"
                  >아이디 저장</label
                >
              </div>

              <div class="flex items-center space-x-2">
                <RouterLink :to="{ name: findIdLink }" class="text-xs"
                  >아이디 찾기
                </RouterLink>
                <span class="inline-block h-3 border-r border-black"></span>
                <RouterLink :to="{ name: findPwLink }" class="text-xs"
                  >비밀번호 찾기
                </RouterLink>
              </div>
            </div>

            <div class="mt-12 flex items-center gap-x-2">
              <StoreBtn is-black>로그인</StoreBtn>
              <StoreLinkBtn :route-to="signupLink">회원가입</StoreLinkBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </InnerXsLayout>
</template>

<script setup>
import InnerXsLayout from "@/components/common/layouts/InnerXsLayout";
import StoreBtn from "@/components/common/StoreBtn";
import StoreLinkBtn from "@/components/common/StoreLinkBtn";

const findIdLink = process.env.STORE_MEMBER_FIND_ID;
const findPwLink = process.env.STORE_MEMBER_FIND_PW;
const signupLink = process.env.STORE_MEMBER_SIGNUP;
</script>
<script></script>
