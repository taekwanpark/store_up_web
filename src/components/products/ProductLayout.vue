<template>
  <div class="mb-32">
    <ProductBanner v-if="!hasCategory" />
    <InnerLgLayout>
      <slot :hasCategory="hasCategory" />
    </InnerLgLayout>
  </div>
</template>

<script setup>
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import ProductBanner from "@/components/products/ProductBanner";

const props = defineProps({
  hasCategory: { type: Boolean },
  isMain: { type: Boolean, default: false },
});
</script>
