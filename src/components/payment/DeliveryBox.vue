<template>
  <div class="h-fit">
    <div class="rounded-xl border border-store-border">
      <div class="mx-6 my-8 flex flex-col gap-y-10">
        <div class="flex flex-col gap-y-2">
          <div class="text-xl font-medium">기본 배송지 : <span>집</span></div>
          <div class="text-xl">부산 진구 평화빌딩 1090호</div>
        </div>
        <div class="">
          <StoreBtn is-black> 배송지 변경</StoreBtn>
        </div>
      </div>
      <div class="rounded-xl bg-store-gray-light">
        <div class="mx-6 flex flex-col gap-y-3 py-8 text-store-gray-extraDark">
          <div class="flex justify-between">
            <div>상품금액</div>
            <div><span>5,900</span>원</div>
          </div>
          <div class="flex justify-between">
            <div>상품할인</div>
            <div><span>0</span>원</div>
          </div>
          <div class="flex justify-between">
            <div>배송비</div>
            <div>+<span>3,000</span>원</div>
          </div>
          <div class="flex justify-between">
            <div>쿠폰할인</div>
            <div>-<span>590</span>원</div>
          </div>
          <div class="flex justify-between">
            <div>상품권</div>
            <div>-<span>0</span>원</div>
          </div>
          <div class="flex justify-between">
            <div>포인트</div>
            <div>-<span>0</span>원</div>
          </div>
          <Divider />
          <div class="flex justify-between">
            <div>총 <span>1</span>개</div>
            <div><span class="font-medium text-black">8,310</span>원</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <StoreBtn is-black>
        <div class="inline-flex text-xl"><span>8,310</span>원</div>
        결제예정
      </StoreBtn>
    </div>
  </div>
</template>

<script setup>
import Divider from "@/components/common/Divider";
import StoreBtn from "@/components/common/StoreBtn";
</script>
