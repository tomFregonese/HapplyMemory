<script setup lang="ts">
import { defineProps } from 'vue'
import router from '@/router'
import type { Data } from '@/models/Data'

const props = defineProps<{
  title: string
  description: string
  id: number
}>()

function deleteCard(): void {
  let dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    let data: Data = JSON.parse(dataFromStorage).data
    for (let category of data.categories) {
      for (let theme of category.themes) {
        let cardIndex = theme.cards.findIndex(card => card.id === props.id)
        if (cardIndex !== -1) {
          theme.cards.splice(cardIndex, 1)
          break
        }
      }
    }
    localStorage.setItem('data', JSON.stringify({ data }))
    router.go(0)
  }
}

function modifyCard(): void {
  let dataFromStorage = localStorage.getItem('data')
  let themeId : number | null = null;
  if (dataFromStorage) {
    let data: Data = JSON.parse(dataFromStorage).data
    for (let category of data.categories) {
      for (let theme of category.themes) {
        let card = theme.cards.find(card => card.id === props.id)
        if (card) {
          localStorage.setItem('cardToUpdate', JSON.stringify(card))
          themeId = theme.id
          break
        }
      }
    }
  }
  router.push({ name: 'Create_a_card', params: { themeId: themeId } })
}

</script>

<template>
  <div @click="modifyCard()">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <img @click.stop="deleteCard()" src="../assets/trash-can-regular.svg" alt="Delete">
  </div>
</template>

<style scoped>
div {
  width: 80%;
  margin: 0.25em auto;
  padding: 1em 2em;
  border-radius: 5px;
  background-color: white;
}

img {
  right: 1em;
  height: 1em;
}

@media (prefers-color-scheme: dark) {
  div {
    background-color: var(--vt-c-black-mute);
  }
}
</style>