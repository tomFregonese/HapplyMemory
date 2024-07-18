<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import type { Theme } from '@/models/Theme'
import Back from '@/components/BackItem.vue'
import ThemeItem from '@/components/ThemeItem.vue'
import type { Category } from '@/models/Category'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Select a theme to revise')
})

let categoryRevision = localStorage.getItem('categoryRevision')
let themes : Theme[] = []
let category: Category
if (categoryRevision) {
  category = JSON.parse(categoryRevision)
  themes = category.themes
}

function selectTheme(theme: Theme): void {
  const revisionStarted = {
    selectedTheme: theme,
    startTime: new Date().getTime(),
  }
  localStorage.removeItem('categoryRevision')
  localStorage.setItem('revisionStarted', JSON.stringify(revisionStarted))
  router.push('/revision')
}

function selectCategory(): void {
  const revisionStarted = {
    selectedCategory: category,
    startTime: new Date().getTime(),
  }
  localStorage.removeItem('categoryRevision')
  localStorage.setItem('revisionStarted', JSON.stringify(revisionStarted))
  router.push('/revision')
}

function back(): void {
  localStorage.removeItem('categoryRevision')
}

</script>

<template>
  <main>
    <div class="content">
      <ThemeItem v-for="theme in themes" :key="theme.id" @click.stop="selectTheme(theme)"
                                  :id="theme.id"
                  :title="theme.title" :description="theme.description" :revision="true"/>
    </div>
    <br>
    <div class="footer">
    <button @click="selectCategory()">Revise the entire category</button>
    <Back @click="back" where-to-go="Select_category_revision" />
    </div>
  </main>
</template>

<style scoped>

</style>