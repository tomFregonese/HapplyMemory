<script setup lang="ts">
  import router from '@/router'
  import { onMounted, defineEmits } from 'vue'

  const emit = defineEmits(['title'])

  onMounted(() => {
    emit('title', 'Welcome to HapplyMemory :)')
  })

  let revisionStarted = localStorage.getItem('revisionStarted');
  if (revisionStarted) {
    let parsedRevision = JSON.parse(revisionStarted);
    if (parsedRevision.startTime && new Date().getTime() - parsedRevision.startTime < 900000) {
      router.push('/revision');
    }
  }

</script>

<template>
  <main>

    <!-- TODO add a kind avatar to give emotion to the app -->

    <button @click="router.push('select-revision')">Start revision</button>

    <button @click="router.push('/categories')">Categories</button>
  </main>
</template>

<style scoped>

</style>