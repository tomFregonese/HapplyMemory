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
    id: (data.categories.length + 1),
    title: title.value,
    description: description.value,
    themes: []
  }
  data.categories.push(newCategory)
  localStorage.setItem('data', JSON.stringify({data: data}))

  router.push('/categories')
}

</script>

<template>
  <main>
    <form>
      <input id="title" placeholder="Title" v-model="title" type="text" required>

      <textarea id="description" placeholder="Description" v-model="description"></textarea>

      <button :disabled="!isFormValid()" @click="createCategory()">Create Category</button>
      <Back text="Cancel" where-to-go="/categories" />
    </form>
  </main>
</template>

<style scoped>

</style>