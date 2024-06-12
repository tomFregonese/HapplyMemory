<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'
import Back from '@/components/BackItem.vue'
import CategoryItem from '@/components/CategoryItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Select a category to revise')
})

let dataFromStorage = localStorage.getItem('data')
let categories : Category[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    categories.push(category)
  }
}

function selectCategory(category: Category) {
  localStorage.setItem('categoryRevision', JSON.stringify(category))
  router.push('/select-theme-revision')
}

</script>

<template>
  <main>
    <CategoryItem v-for="category in categories" :key="category.id" @click.stop="selectCategory(category)" :id="category.id"
                  :title="category.title" :description="category.description" :revision="true"/>
    <Back where-to-go="Home" />
  </main>
</template>

<style scoped>

</style>