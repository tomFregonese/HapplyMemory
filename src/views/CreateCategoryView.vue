<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import type { Data } from '@/models/Data'
import type { Category } from '@/models/Category'
import Back from '@/components/BackItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a category')
})

let title = ref('')
let description = ref('')

const createCategory = () => {
  let dataFromStorage = localStorage.getItem('data')
  let data : Data;
  if (dataFromStorage) {
    data = JSON.parse(dataFromStorage).data
  } else {
    data = { categories: [] }
  }
  let newCategory : Category = {
    id: (data.categories.length + 1),
    title: title.value,
    description: description.value,
    themes: []
  }
  data.categories.push(newCategory)
  localStorage.setItem('data', JSON.stringify({data: data}))
}

</script>

<template>
  <main>
    <form @submit.prevent="createCategory">
      <input id="title" placeholder="Title" v-model="title" type="text" required>

      <textarea id="description" placeholder="Description" v-model="description"></textarea>

      <button type="submit">Create Category</button>
      <Back text="Cancel" />
    </form>
  </main>
</template>

<style scoped>

</style>