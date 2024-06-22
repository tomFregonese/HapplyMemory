<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import CategoryItem from '@/components/CategoryItem.vue'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'
import Back from '@/components/BackItem.vue'

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
    <CategoryItem v-for="category in categories" :key="category.id" :id="category.id" :title="category.title" :description="category.description"/>

    <div class="footer">
      <button @click="router.push('/create-category')">New category</button>
      <Back where-to-go="Home" />
    </div>
  </main>
</template>

<style scoped>

</style>