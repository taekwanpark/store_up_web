<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="bg-amber-400">{{ msg }}</div>
</template>

<style scoped>
</style>
