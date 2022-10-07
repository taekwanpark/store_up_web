<template>
  <ProductLayout>
    <MainProductList
      :products="products"
      list-amount="999"
      show-sort
      title="신상품"
    />
  </ProductLayout>
</template>

<script setup>
import MainProductList from "@/components/products/ProductsList";
import ProductLayout from "@/components/products/ProductLayout";
import { products } from "@/assets/productsList";
</script>
