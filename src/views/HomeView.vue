<script setup lang="ts">
  import router from '@/router'
  import { onMounted, defineEmits } from 'vue'

  const emit = defineEmits(['title'])

  onMounted(() => {
    emit('title', 'Welcome to HapplyMemory :)')
  })

  let revision = localStorage.getItem('revision');
  if (revision) {
    let parsedRevision = JSON.parse(revision);
    if (parsedRevision.started && new Date().getTime() - parsedRevision.startTime < 900000) {
      router.push('/revision');
    }
  }

</script>

<template>
  <main>

    <button @click="router.push('select-revision')">Start revision</button>

    <button @click="router.push('/categories')">Categories</button>
  </main>
</template>

<style scoped>

</style>