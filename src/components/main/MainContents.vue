<template>
  <InnerLgLayout>
    <!--		인기 상품-->
    <ProductList
      :products="products"
      is-main
      list-limit="8"
      routeTo="/"
      title="BEST - 인기 상품"
    />
    <!--		신상품-->
    <ProductList
      :products="products"
      is-main
      list-limit="8"
      routeTo="/"
      title="신상품"
    />

    <!--		이달의 제철 - 수산물-->
    <div class="h-96 w-full bg-gray-100">이달의 제철 - 수산물</div>
    <ProductList
      :products="products"
      is-main
      list-limit="4"
      routeTo="/"
      title="농산물"
    />
    <ProductList
      :products="products"
      is-main
      list-limit="4"
      routeTo="/"
      title="축산물"
    />
    <ProductList
      :products="products"
      is-main
      list-limit="4"
      routeTo="/"
      title="임산물"
    />
    <ProductList
      :products="products"
      is-main
      list-limit="4"
      routeTo="/"
      title="가공 식품"
    />
  </InnerLgLayout>
</template>

<script setup>
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import ProductList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
</script>
