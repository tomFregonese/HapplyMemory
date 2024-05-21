<script setup lang="ts">
import { onMounted, defineEmits, defineProps } from 'vue'
import router from '@/router'
import ThemeItem from '@/components/ThemeItem.vue'
import type { Theme } from '@/models/Theme'
import Back from '@/components/BackItem.vue'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'
const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', `Themes of ${currentCategory.title}`)
})

const props = defineProps<{
  categoryId: number
}>()

let dataFromStorage = localStorage.getItem('data')
let categories : Category[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    categories.push(category)
  }
}

let currentCategory : Category = categories.find(category => category.id === props.categoryId)! ;

let themesList : Theme[] = currentCategory.themes || [] ;

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