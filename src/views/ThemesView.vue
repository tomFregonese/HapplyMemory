<script setup lang="ts">
import { onMounted, defineEmits, defineProps } from 'vue'
import router from '@/router'
import ThemeItem from '@/components/ThemeItem.vue'
import type { Theme } from '@/models/Theme'
import Back from '@/components/BackItem.vue'
const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', `Themes of ${props.parentCategory}`)
})

const props = defineProps<{
  parentCategory: string
  title: string
  description: string
  id: number
  themes: Theme[]
}>()

let themesList : Theme[] = props.themes





</script>

<template>
  <main>
    <ThemeItem v-for="theme in themesList" :key="theme.id" :id="theme.id" :title="theme.title"
                  :description="theme.description"  />
    <button @click="router.push('/create-theme')">New theme</button>
    <Back />
  </main>
</template>

<style scoped>

</style>