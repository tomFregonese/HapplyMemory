<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import Back from '@/components/BackItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Cards')
})

</script>

<template>
  <main>
    <button @click="router.push('/create-card')">New card</button>
    <Back />
  </main>
</template>

<style>

</style>