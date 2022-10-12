<template>
  <ProductLayout>
    <ProductsList
      :category="currentGroup"
      :products="products"
      :title="data ? data[0]?.name : '...loading'"
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
import { computed, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { instance } from "@/libs/axios";

const {
  query: { category_id },
} = useRoute();

const data = ref(null);
const isLoading = ref(true);
const useFetch = (url) => {
  instance(url)
    .then((res) => (data.value = res.data))
    .then(() => (isLoading.value = false))
    .catch((err) => console.log(err));
};

onMounted(() => {
  useFetch(`/api/groups?filter[id]=${category_id}`);
});
onBeforeRouteUpdate((to, from) => {
  useFetch(`/api/groups?filter[id]=${to.query.category_id}`);
});

const props = defineProps({
  categoryId: String,
});
const currentGroup = computed(() => {
  return category.find((o) => o.categoryId === props.categoryId);
});
</script>
