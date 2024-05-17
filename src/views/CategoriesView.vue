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

let categories : Category[] = []
if (localStorage.getItem('data')) {
  let data : Data = JSON.parse(localStorage.getItem('data')!)
  console.log(data)
  for (let category of data.categories) {
    categories.push(category)
  }
  console.log(categories)

}


</script>

<template>
  <main>
    <CategoryItem v-for="category in categories" :key="category.id" :title="category.title"
                  :description="category.description" />

    <button @click="router.push('/create-category')">New category</button>
  </main>
</template>

<style scoped>

</style>