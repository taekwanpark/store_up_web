<template>
  <InnerLgLayout>
    <!--		인기 상품-->
    <MainProductList
      :products="products"
      routeTo="/products-list/best"
      title="BEST - 인기 상품"
    />
    <!--		신상품-->
    <MainProductList :products="products" routeTo="/" title="신상품" />

    <!--		이달의 제철 - 수산물-->
    <div class="h-96 w-full bg-gray-100">이달의 제철 - 수산물</div>
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="농산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="축산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="임산물"
    />
    <MainProductList
      :products="products"
      list-amount="4"
      routeTo="/"
      title="가공 식품"
    />
  </InnerLgLayout>
</template>

<script setup>
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import MainProductList from "@/components/main/ProductsList";
import { products } from "@/assets/productsList";
</script>
