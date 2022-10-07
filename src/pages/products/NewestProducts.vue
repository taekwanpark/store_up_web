<template>
  <div class="mb-32">
    <div>
      <div class="h-96 w-full bg-gray-100"></div>
    </div>
    <InnerLgLayout>
      <MainProductList
        :products="products"
        is-page
        list-amount="999"
        title="신상품"
      />
    </InnerLgLayout>
  </div>
</template>

<script setup>
import MainProductList from "@/components/main/ProductsList";
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import { products } from "@/assets/productsList";
</script>
