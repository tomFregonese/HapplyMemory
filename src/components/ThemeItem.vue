<script setup lang="ts">
import { defineProps } from 'vue'
import router from '@/router'

const props = defineProps<{
  title: string
  description: string
  id: number
}>()

function openTheme() {
  router.push(`/theme/${props.id}`)

}

</script>

<template>
  <div @click="openTheme()">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
div {
  width: 80%;
  margin: 0.25em auto;
  padding: 1em 2em;
  border-radius: 5px;
  background-color: white;
}

@media (prefers-color-scheme: dark) {
  div {
    background-color: black;
  }
}

</style>