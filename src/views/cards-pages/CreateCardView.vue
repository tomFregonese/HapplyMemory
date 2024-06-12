<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import Back from '@/components/BackItem.vue'
import { useRoute } from 'vue-router'
import type { Data } from '@/models/Data'
import router from '@/router'
import type { Theme } from '@/models/Theme'
import { modifyingCard, removeCard } from '@/services/modifyService'
import type { Card } from '@/models/Card'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a card')
})

const route = useRoute()
const themeId : number = Number(route.params.themeId)

function isFormValid() {
  return title.value.trim() !== '' && description.value.trim() !== '';
}

let title = ref('')
let description = ref('')

let cardToUpdate: Card

if (modifyingCard()) {
  cardToUpdate = JSON.parse(localStorage.getItem('cardToUpdate')!)
  title.value = cardToUpdate.title
  description.value = cardToUpdate.description
  removeCard(cardToUpdate.id)
  localStorage.removeItem('cardToUpdate')
}

function redoModifiedCard() {
  if (cardToUpdate) {
    let dataFromStorage = localStorage.getItem('data')
    if (dataFromStorage) {
      let data: Data = JSON.parse(dataFromStorage).data
      for (let category of data.categories) {
        for (let theme of category.themes) {
          if (theme.id === themeId) {
            theme.cards.push(cardToUpdate)
            break
          }
        }
      }
      localStorage.setItem('data', JSON.stringify({ data }))
    }
  }
}


function createCard(): void {
  let dataFromStorage = localStorage.getItem('data')
  let data : Data;
  if (dataFromStorage) {
    data = JSON.parse(dataFromStorage).data
  } else {
    data = { categories: [] }
  }

  let theme: Theme | undefined;
  for (let category of data.categories) {
    theme = category.themes.find(t => t.id === themeId)
    if (theme) {
      break;
    }
  }

  if (theme) {
    theme.cards.push({
      id: (generateCardId(data, theme)),
      title: title.value,
      description: description.value,
      level: 1,
    })
    localStorage.setItem('data', JSON.stringify({data: data}))

    router.push({ name: 'Cards', params: { themeId: themeId } })
  }
}

function generateCardId(data: Data, currentTheme: Theme): number {
  let id = currentTheme.cards.length + 1
  while (cardIdExists(data, id)) {
    id++
  }
  return id
}

function cardIdExists(data: Data, id: number): boolean {
  for (let category of data.categories) {
    for (let theme of category.themes) {
      for (let card of theme.cards) {
        if (card.id === id) {
          return true
        }
      }
    }
  }
  return false
}

</script>

<template>
  <main>
    <form>
      <textarea id="title" placeholder="Question" v-model="title" required/>

      <textarea id="description" placeholder="Answer" v-model="description"/>

      <button :disabled="!isFormValid()" @click="createCard()">Create Card</button>
      <Back @click="redoModifiedCard" text="Cancel" where-to-go="Cards" :param="themeId" />
    </form>
  </main>
</template>

<style scoped>

</style>