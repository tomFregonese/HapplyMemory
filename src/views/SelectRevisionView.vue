<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'What to revise?')
})

function startRevision() {
  let revision: {started: boolean; startTime: number} = {
    started: true,
    startTime: new Date().getTime()
  }
  localStorage.setItem('revision', JSON.stringify(revision));

  router.push('/revision')
}

</script>

<template>
  <main>
  <button @click="startRevision">Start revision</button>
  </main>
</template>

<style scoped>

</style>