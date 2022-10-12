<template>
  <InnerLgLayout>
    <PageTitle>주문결제</PageTitle>
    <div class="mb-40 grid grid-cols-3 gap-10">
      <div class="col-span-2 flex flex-col gap-y-32">
        <InfoBox title="주문 상품">
          <div class="flex items-center justify-start gap-5">
            <div>1</div>
            <div class="aspect-square w-20 bg-store-gray-light"></div>
            <div class="flex flex-col gap-1">
              <div class="text-base">새콤 달콤 괴정 감귤</div>
              <div class="text-sm text-store-gray-darker">
                옵션:새콤달콤 괴정 감귤 500g
              </div>
            </div>
            <div class="ml-32">수량 1개</div>
          </div>
          <div class="flex items-center justify-start gap-5">
            <div>1</div>
            <div class="aspect-square w-20 bg-store-gray-light"></div>
            <div class="flex flex-col gap-1">
              <div class="text-base">새콤 달콤 괴정 감귤</div>
              <div class="text-sm text-store-gray-darker">
                옵션:새콤달콤 괴정 감귤 500g
              </div>
            </div>
            <div class="ml-32">수량 1개</div>
          </div>
        </InfoBox>

        <InfoBox title="주문자 정보">
          <div class="grid w-full grid-cols-5">
            <div class="w-32">주문자명</div>
            <div class="text-store-gray-darker">홍길동</div>
          </div>
          <div class="grid w-full grid-cols-5">
            <div class="w-32">연락처</div>
            <div class="text-store-gray-darker">010-1234-1234</div>
          </div>
          <Divider />
          <div class="grid w-full grid-cols-5">
            <div class="w-32">배송지 정보</div>
            <div class="col-span-3 flex flex-col gap-y-2">
              <div class="text-store-gray-darker">
                <span class="mr-2">홍길동</span><span>010-1234-1234</span>
              </div>
              <div class="text-store-gray-darker">
                <span class="mr-2">[집]</span><span>010-1234-1234</span>
              </div>
            </div>
          </div>
          <Divider />
          <div class="grid w-full grid-cols-5">
            <div class="">배송 요청사항</div>
            <div class="col-span-3">
              <FormKit type="text" />
            </div>
          </div>
        </InfoBox>

        <InfoBox title="쿠폰 / 포인트 / 상품권">
          <div class="grid w-full grid-cols-5">
            <div>쿠폰 적용</div>
            <div class="col-span-3">
              <FormKit
                :options="{
                  coupon10: '온니샵 웰컴 10% 할인 쿠폰',
                  coupon5: '온니샵 웰컴 5% 할인 쿠폰',
                }"
                placeholder="쿠폰을 선택해주세요."
                type="select"
              ></FormKit>
            </div>
          </div>
          <Divider />
          <div class="grid w-full grid-cols-5">
            <div>포인트 적용</div>
            <div class="col-span-3">
              <div class="grid grid-cols-8">
                <div class="col-span-6">
                  <FormKit type="text"></FormKit>
                </div>
                <div class="col-span-2 ml-2">
                  <StoreBtn text-size="sm">모두 사용</StoreBtn>
                </div>
                <div class="col-span-6 mt-2">
                  <div class="text-store-gray-darker">
                    보유중인 포인트<span class="ml-2">100p</span>
                  </div>
                </div>
                <div class="col-span-2 ml-2 justify-self-center">
                  <span class="text-xs text-store-gray-darker"
                    >포인트 전환하기</span
                  >
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div class="grid w-full grid-cols-5">
            <div>상품권 사용</div>
            <div class="col-span-3">
              <div class="grid grid-cols-8">
                <div class="col-span-6">
                  <FormKit type="text"></FormKit>
                </div>
                <div class="col-span-2 ml-2">
                  <StoreBtn text-size="sm">모두 사용</StoreBtn>
                </div>
                <div class="col-span-6 mt-2">
                  <div class="text-store-gray-darker">
                    보유중인 상품권<span class="ml-2">100원</span>
                  </div>
                </div>
                <div class="col-span-2 ml-2 justify-self-center">
                  <span class="text-xs text-store-gray-darker"
                    >상품권 전환하기</span
                  >
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <FormKit
              label="결제 시 보유쿠폰 및 포인트 모두 사용"
              type="checkbox"
            />
          </div>
        </InfoBox>

        <SelectPayment @paymentValue="paymentValue" />
        <!--				3. 간편 결제-->
        <InfoBox v-if="payment === 'easyPay'" has-checkbox title="현금영수증">
          <div class="grid grid-cols-5 gap-y-5">
            <div class="col-span-3 col-start-2">
              <div class="flex gap-10">
                <div class="flex items-center justify-start gap-1">
                  <input
                    id="personalReceipt"
                    name="receiptPurpose"
                    type="radio"
                    value="personalReceipt"
                  />
                  <label class="mt-[2px]" for="personalReceipt"
                    >개인소득공제용</label
                  >
                </div>
                <div class="flex items-center justify-start gap-1">
                  <input
                    id="companyReceipt"
                    name="receiptPurpose"
                    type="radio"
                    value="companyReceipt"
                  />
                  <label class="mt-[2px]" for="companyReceipt"
                    >사업자증빙용 &#183; 세금계산서</label
                  >
                </div>
              </div>
            </div>
            <div class="col-span-3 col-start-2">
              <FormKit type="select" />
            </div>
            <div class="col-span-3 col-start-2">
              <div class="grid grid-cols-3 gap-x-2">
                <FormKit type="select" />
                <FormKit type="number" />
                <FormKit type="number" />
              </div>
            </div>
          </div>
        </InfoBox>
        <!--				end-->

        <InfoBox title="개인정보 수집 / 제공">
          <FormKit
            label="정기/반복결제 이용약관에 동의합니다."
            type="checkbox"
          ></FormKit>
          <FormKit
            label="결제 시 개인정보 제공에 동의합니다."
            type="checkbox"
          ></FormKit>
        </InfoBox>
        <div class="flex w-full items-center justify-center">
          <div>
            <StoreBtn btn-size="xl" is-black>
              <div class="inline-flex text-xl"><span>8,310</span>원</div>
              결제하기
            </StoreBtn>
          </div>
        </div>
      </div>
      <DeliveryBox />
    </div>
  </InnerLgLayout>
</template>

<script setup>
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import PageTitle from "@/components/common/PageTitle";
import InfoBox from "@/components/payment/InfoBox";
import Divider from "@/components/common/Divider";
import StoreBtn from "@/components/common/StoreBtn";
import DeliveryBox from "@/components/payment/DeliveryBox";
import SelectPayment from "@/components/payment/SelectPayment";
import { ref } from "vue";

const payment = ref("");

const paymentValue = (a) => {
  payment.value = a;
};
</script>

<style scoped></style>
