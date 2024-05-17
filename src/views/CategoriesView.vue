<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import CategoryItem from '@/components/CategoryItem.vue'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Categories')
})

let dataFromStorage = localStorage.getItem('data')
let categories : Category[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    categories.push(category)
  }

}


</script>

<template>
  <main>
    <CategoryItem v-for="category in categories" :key="category.id" :id="category.id" :parentCategory="category.title"
                  :title="category.title" :description="category.description"/>

    <button @click="router.push('/create-category')">New category</button>
  </main>
</template>

<style scoped>

</style>