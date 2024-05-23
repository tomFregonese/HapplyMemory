<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import Back from '@/components/BackItem.vue'
import type { Data } from '@/models/Data'
import type { Category } from '@/models/Category'
import router from '@/router'
import { useRoute } from 'vue-router'

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

function createTheme() {
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
      id: (category.themes.length + 1),
      title: title.value,
      description: description.value,
      cards: [],
    })
    localStorage.setItem('data', JSON.stringify({data: data}))

    router.push({ name: 'Themes', params: { categoryId: categoryId } })
  }

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