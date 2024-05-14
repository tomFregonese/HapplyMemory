<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Settings')
})
</script>

<template>
  <main>

  </main>
</template>

<style>

</style>
