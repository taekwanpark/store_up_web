<template>
  <ProductCategoryLayout>
    <MainProductList
      :category="currentGroup"
      :products="products"
      :title="currentGroup.title"
      list-amount="999"
      show-category
      show-sort
    />
  </ProductCategoryLayout>
</template>

<script setup>
import ProductCategoryLayout from "@/components/products/ProductCategoryLayout";
import MainProductList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
import { groupList } from "@/assets/groupList";
import { computed } from "vue";

const props = defineProps({
  id: String,
});
const currentGroup = computed(() => {
  return groupList.find((o) => o.id === props.id);
});
</script>
