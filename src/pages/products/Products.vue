<template>
  <ProductLayout>
    <MainProductList
      :category="currentGroup"
      :products="products"
      list-amount="999"
      show-category
    />
  </ProductLayout>
</template>

<script setup>
import ProductLayout from "@/components/products/ProductLayout";
import MainProductList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
import { category } from "@/assets/groupList";
import { computed } from "vue";

const props = defineProps({
  categoryId: String,
});
const currentGroup = computed(() => {
  return category.find((o) => o.categoryId === props.categoryId);
});
</script>
