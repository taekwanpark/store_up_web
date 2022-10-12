<template>
  <ProductLayout>
    <ProductsList
      :category="currentGroup"
      :products="products"
      has-category
      list-limit="999"
    />
  </ProductLayout>
</template>

<script setup>
import ProductLayout from "@/components/products/ProductLayout";
import ProductsList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
import { category } from "@/assets/groupList";
import { computed, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  categoryId: String,
});
const currentGroup = computed(() => {
  return category.find((o) => o.categoryId === props.categoryId);
});
const route = useRoute();
const query = route.query;
const { proxy } = getCurrentInstance();
const { data } = proxy.getData(
  "https://storeup.amuz/api/product?count=20&filter[brand_id]=1&filter[group_id]=1"
);
</script>