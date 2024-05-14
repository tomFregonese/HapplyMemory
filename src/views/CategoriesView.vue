<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Categories')
})
</script>

<template>
  <main>
    <button @click="router.push('/create-category')">New category</button>
  </main>
</template>

<style scoped>

</style>