<script setup lang="ts">
  import router from '@/router'
  import { onMounted, defineEmits } from 'vue'
  import { isRevisionStarted } from '@/services/revisionService'

  const emit = defineEmits(['title'])

  onMounted(() => {
    emit('title', 'Welcome to HapplyMemory :)')
  })

if (isRevisionStarted()) {
  router.push('revision');
}

</script>

<template>
  <main>
    <!-- TODO add a kind avatar to give emotion to the app -->
    <button @click="router.push('select-category-revision')">Start revision</button>
    <button @click="router.push('/categories')">Categories</button>
  </main>
</template>

<style scoped>

</style>