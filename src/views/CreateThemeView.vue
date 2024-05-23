<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import Back from '@/components/BackItem.vue'
import type { Data } from '@/models/Data'
import router from '@/router'
import { useRoute } from 'vue-router'
import type { Category } from '@/models/Category'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a theme')
})

const route = useRoute()
const categoryId : number = Number(route.params.categoryId)

function isFormValid() {
  return title.value.trim() !== '' && description.value.trim() !== '';
}

let title = ref('')
let description = ref('')

function createTheme(): void {
  let dataFromStorage = localStorage.getItem('data')
  let data : Data;
  if (dataFromStorage) {
    data = JSON.parse(dataFromStorage).data
  } else {
    data = { categories: [] }
  }

  let category = data.categories.find(category => category.id === categoryId)

  if (category) {
    category.themes.push({
      id: (generateThemeId(data, category)),
      title: title.value,
      description: description.value,
      cards: [],
    })
    localStorage.setItem('data', JSON.stringify({data: data}))

    router.push({ name: 'Themes', params: { categoryId: categoryId } })
  }
}

function generateThemeId(data: Data, currentCategory: Category): number {
  let id = currentCategory.themes.length + 1
  while (themeIdExists(data, id)) {
    id++
  }
  return id
}

function themeIdExists(data: Data, id: number): boolean {
    for (let category of data.categories) {
      for (let theme of category.themes) {
        if (theme.id === id) {
          return true
      }
    }
  }
  return false
}

</script>

<template>
  <main>
    <form>
      <input id="title" placeholder="Title" v-model="title" type="text" required>

      <textarea id="description" placeholder="Description" v-model="description"></textarea>

      <button :disabled="!isFormValid()" @click="createTheme()">Create Category</button>
      <Back text="Cancel" />
    </form>
  </main>
</template>

<style scoped>

</style>