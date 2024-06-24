<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import ThemeItem from '@/components/ThemeItem.vue'
import type { Theme } from '@/models/Theme'
import Back from '@/components/BackItem.vue'
import type { Category } from '@/models/Category'
import type { Data } from '@/models/Data'
import { useRoute } from 'vue-router'
const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', `Themes of ${currentCategory.title}`)
})

const route = useRoute()
const categoryId : number = Number(route.params.categoryId)

let dataFromStorage = localStorage.getItem('data')
let categories : Category[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    categories.push(category)
  }
}

let currentCategory : Category = categories.find(category => category.id === categoryId)! ;

let themesList : Theme[] = currentCategory.themes || [] ;

</script>

<template>
  <main>
    <div class="content">
      <ThemeItem v-for="theme in themesList" :key="theme.id" :id="theme.id" :title="theme.title"
                  :description="theme.description"  />
    </div>
    <div class="footer">
      <button @click="router.push({name: 'Create_a_theme', params: { categoryId: currentCategory.id} })">New
      theme</button>
    <Back where-to-go="Categories"/>
    </div>
  </main>
</template>

<style scoped>

</style>