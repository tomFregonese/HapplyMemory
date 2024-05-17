<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  description: string
}>()

</script>

<template>
  <div>
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
div {
  border-radius: 5px;
  background-color: white;
}

@media (prefers-color-scheme: dark) {
  div {
    background-color: black;
  }
}

</style>