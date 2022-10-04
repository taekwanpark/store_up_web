<template>
  <!--		banner slider-->
  <div>
    <div class="h-96 w-full border"></div>
  </div>

  <InnerLgLayout>
    <!--		인기 상품-->
    <MainProductList routeTo="/products-list/best" title="BEST - 인기 상품" />
    <!--		신상품-->
    <MainProductList routeTo="/" title="신상품" />
  </InnerLgLayout>
</template>

<script setup>
import InnerLgLayout from "@/components/layouts/InnerLgLayout";
import MainProductList from "@/components/main/MainProductList";
</script>
