<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Let\'s practice !')
})
</script>

<template>
  <main>

  </main>
</template>

<style scoped>

</style>