<template>
  <ProductLayout>
    <MainProductList
      :category="currentGroup"
      :products="products"
      list-amount="999"
      show-category
      title="adf"
    />
  </ProductLayout>
</template>

<script setup>
import ProductLayout from "@/components/products/ProductLayout";
import MainProductList from "@/components/products/ProductsList";
import { products } from "@/assets/productsList";
import { category } from "@/assets/groupList";
import { computed, onMounted, ref } from "vue";
import { getData } from "@/libs/useAxios";

const props = defineProps({
  categoryId: String,
});
const currentGroup = computed(() => {
  return category.find((o) => o.categoryId === props.categoryId);
});
const data = ref([]);
const query = ref("");
query.value = `?count=20&filter[brand_id]=1&filter[purchasable]=1&filter[group_id]=1&sort=id&page=1`;
onMounted(async () => {
  data.value = await getData(
    `/api/product?count=20&filter[brand_id]=1&filter[purchasable]=1&filter[group_id]=1&sort=id&page=1`
  );
});
console.log(data.value);
</script>