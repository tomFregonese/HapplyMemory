<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Settings')
})
</script>

<template>
  <main>
    <p>There is no settings available yet :(</p>
  </main>
</template>

<style>

</style>
