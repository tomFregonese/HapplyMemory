<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import CardItem from '@/components/CardItem.vue'
import type { Card } from '@/models/Card'
import Back from '@/components/BackItem.vue'
import type { Theme } from '@/models/Theme'
import type { Data } from '@/models/Data'
import { useRoute } from 'vue-router'
const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', `Cards of ${currentTheme.title}`)
})

const route = useRoute()
const themeId : number = Number(route.params.themeId)

let dataFromStorage = localStorage.getItem('data')
let themes : Theme[] = []
if (dataFromStorage) {
  let data : Data = JSON.parse(dataFromStorage).data
  for (let category of data.categories) {
    for (let theme of category.themes) {
      themes.push(theme)
    }
  }
}

let currentTheme : Theme = themes.find(theme => theme.id === themeId)! ;

let cardsList : Card[] = currentTheme.cards || [] ;


function goBack(): number {
  let categoryId: number | null = null;
  if (dataFromStorage) {
    let data : Data = JSON.parse(dataFromStorage).data
    for (let category of data.categories) {
      for (let theme of category.themes) {
        if (theme.id === themeId) {
          categoryId = category.id;
          break;
        }
      }
      if (categoryId !== null) {
        break;
      }
    }
  }
  return Number(categoryId);
}
const categoryId = goBack();

</script>

<template>
  <main>
    <CardItem v-for="card in cardsList" :key="card.id" :id="card.id" :title="card.title"
                  :description="card.description"  />
    <button @click="router.push({name: 'Create_a_card', params: { themeId: currentTheme.id} })">New
      card</button>
    <Back where-to-go="Themes" :category-id="categoryId"/>
  </main>
</template>

<style scoped>

</style>