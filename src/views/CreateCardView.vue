<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import Back from '@/components/BackItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a card')
})
</script>

<template>
  <main>

    <Back text="Cancel" />
  </main>
</template>

<style scoped>

</style>