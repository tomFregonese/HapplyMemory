<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import type { Data } from '@/models/Data'
import type { Category } from '@/models/Category'
import Back from '@/components/BackItem.vue'
import router from '@/router'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a category')
})

function isFormValid() {
  return title.value.trim() !== '' && description.value.trim() !== '';
}

let title = ref('')
let description = ref('')

function createCategory(): void {
  let dataFromStorage = localStorage.getItem('data')
  let data : Data;
  if (dataFromStorage) {
    data = JSON.parse(dataFromStorage).data
  } else {
    data = { categories: [] }
  }
  let newCategory : Category = {
    id: generateCategoryId(data),
    title: title.value,
    description: description.value,
    themes: []
  }
  data.categories.push(newCategory)
  localStorage.setItem('data', JSON.stringify({data: data}))

  router.push('/categories')
}

function generateCategoryId(data: Data): number {
  let id = data.categories.length + 1
  while (categoryIdExists(data, id)) {
    id++
  }
  return id
}

function categoryIdExists(data: Data, id: number): boolean {
    for (let category of data.categories) {
      if (category.id === id) {
        return true
      }
    }
    return false
}

</script>

<template>
  <main>
    <form>
      <input id="title" placeholder="Title" v-model="title" type="text" autofocus required>

      <textarea id="description" placeholder="Description" v-model="description"></textarea>

      <button :disabled="!isFormValid()" @click="createCategory()">Create Category</button>
      <Back text="Cancel" where-to-go="Categories" />
    </form>
  </main>
</template>

<style scoped>

</style>