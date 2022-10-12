<template>
  <InfoBox title="결제 수단">
    <div class="grid grid-cols-5">
      <div>결제수단 선택</div>
      <div class="col-span-4">
        <div
          class="grid h-28 grid-cols-3 overflow-hidden rounded-xl border text-store-gray-extraDark"
        >
          <div class="flex border-b border-r">
            <input
              id="easyCard"
              v-model="paymentValue"
              checked
              class="hidden"
              name="payment"
              type="radio"
              value="easyCard"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="easyCard"
              >간편 카드 결제</label
            >
          </div>
          <div class="flex border-b border-r">
            <input
              id="basicCard"
              v-model="paymentValue"
              class="hidden"
              name="payment"
              type="radio"
              value="basicCard"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="basicCard"
              >일반 카드 결제</label
            >
          </div>
          <div class="flex border-b border-r">
            <input
              id="easyPay"
              v-model="paymentValue"
              class="hidden"
              name="payment"
              type="radio"
              value="easyPay"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="easyPay"
              >간편 결제</label
            >
          </div>
          <div class="flex border-b border-r">
            <input
              id="bankTransfer"
              v-model="paymentValue"
              class="hidden"
              name="payment"
              type="radio"
              value="bankTransfer"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="bankTransfer"
              >실시간 계좌 이체</label
            >
          </div>
          <div class="flex border-b border-r">
            <input
              id="noBank"
              v-model="paymentValue"
              class="hidden"
              name="payment"
              type="radio"
              value="noBank"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="noBank"
              >무통장 입금</label
            >
          </div>
          <div class="flex border-b border-r">
            <input
              id="mobilePay"
              v-model="paymentValue"
              class="hidden"
              name="payment"
              type="radio"
              value="mobilePay"
            />
            <label
              class="flex w-full cursor-pointer items-center justify-center"
              for="mobilePay"
              >휴대폰 결제</label
            >
          </div>
        </div>

        <!--							결제 방법에 따라 -->
        <!--							1. 간편 카드 결제-->
        <div v-if="paymentValue === 'easyCard'" class="mt-5">
          <div
            class="aspect-video w-full rounded-xl bg-store-gray-light shadow-lg"
          >
            <div class="flex h-full flex-col items-center justify-center">
              <div class="text-lg">결제 정보 등록하기</div>
              <span class="text-3xl">+</span>
            </div>
          </div>
        </div>

        <!--							3. 간편 결제-->
        <div v-if="paymentValue === 'easyPay'" class="mt-5">
          <div class="grid grid-cols-4 gap-4 text-store-gray-extraDark">
            <div class="flex items-center justify-start gap-1">
              <input
                id="naver"
                checked
                name="easyPay"
                type="radio"
                value="naver"
              />
              <label class="mt-[2px]" for="naver">네이버페이</label>
            </div>
            <div class="flex items-center justify-start gap-1">
              <input id="kakao" name="easyPay" type="radio" value="kakao" />
              <label class="mt-[2px]" for="kakao">카카오페이</label>
            </div>
            <div class="flex items-center justify-start gap-1">
              <input id="toss" name="easyPay" type="radio" value="toss" />
              <label class="mt-[2px]" for="toss">토스</label>
            </div>
            <div class="flex items-center justify-start gap-1">
              <input id="payco" name="easyPay" type="radio" value="payco" />
              <label class="mt-[2px]" for="payco">페이코</label>
            </div>
            <div class="flex items-center justify-start gap-1">
              <input id="smile" name="easyPay" type="radio" value="smile" />
              <label class="mt-[2px]" for="smile">스마일페이</label>
            </div>
            <div class="flex items-center justify-start gap-1">
              <input id="chai" name="easyPay" type="radio" value="chai" />
              <label class="mt-[2px]" for="chai">차이</label>
            </div>
          </div>
        </div>
        <!--							end-->
      </div>
    </div>
  </InfoBox>
</template>

<script setup>
import InfoBox from "@/components/payment/InfoBox";
import { ref, watch } from "vue";

const paymentValue = ref("easyCard");
const emits = defineEmits(["paymentValue"]);
watch(
  () => paymentValue.value,
  (to) => emits("paymentValue", to)
);
</script>

<style scoped>
input[name="payment"]:checked + label {
  @apply text-white;
  @apply bg-zinc-600;
}
</style>