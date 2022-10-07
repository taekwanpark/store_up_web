<template>
  <div class="mb-32">
    <ProductBanner />
    <InnerLgLayout>
      <slot></slot>
    </InnerLgLayout>
  </div>
</template>

<script setup>
import InnerLgLayout from "@/components/common/layouts/InnerLgLayout";
import ProductBanner from "@/components/products/ProductBanner";
</script>
