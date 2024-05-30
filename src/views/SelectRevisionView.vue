<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'
import Back from '@/components/BackItem.vue'
import CategoryItem from '@/components/CategoryItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Select Revision')
})

let dataFromStorage = localStorage.getItem('data')
let categories : Category[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    categories.push(category)
  }
}

const selectCategory = (category: Category) => {
  let revisionStarted = {
    selectedCategory: category,
    startTime: new Date().getTime()
  }
  localStorage.setItem('revisionStarted', JSON.stringify(revisionStarted))
  router.push('/revision')
}

</script>

<template>
  <main>
    <CategoryItem v-for="category in categories" :key="category.id" @click.stop="selectCategory(category)" :id="category.id"
                  :title="category.title" :description="category.description" :revision="true"/>
    <!--<button @click="startRevision">Start revision</button>-->
    <Back />
  </main>
</template>

<style scoped>

</style>