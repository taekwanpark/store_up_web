<script setup>
import Layout from "@/components/common/layouts/Layout";
</script>

<template>
  <Layout>
    <RouterView :key="$route.path" />
  </Layout>
</template>
