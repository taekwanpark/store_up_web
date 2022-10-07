<template>
  <ProductCategoryLayout>
    <MainProductList
      :products="products"
      list-amount="999"
      show-category
      show-sort
      title="농산품"
    />
  </ProductCategoryLayout>
</template>

<script setup>
import ProductCategoryLayout from "@/components/products/ProductCategoryLayout";
import MainProductList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);
console.log(route.path);
console.log(route.params);
console.log(route.query);

const props = defineProps({
  abc: String,
});
console.log(props.abc);
</script>
