<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Themes')
})
</script>

<template>
  <main>
    <button @click="router.push('/create-theme')">New theme</button>
  </main>
</template>

<style scoped>

</style>