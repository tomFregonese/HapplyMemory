<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import router from '@/router'
import { isRevisionStarted } from '@/services/revisionService'
import type { Card } from '@/models/Card'
import type { Theme } from '@/models/Theme'
import type { Category } from '@/models/Category'
import { LEVELS } from '@/models/Levels'
import BackItem from '@/components/BackItem.vue'
import type { Data } from '@/models/Data'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Lets practice !')
})

if (!isRevisionStarted()) {
  router.push('home');
}

const revision = JSON.parse(localStorage.getItem('revisionStarted')!);
const dataFromLocalStorage: Data = JSON.parse(localStorage.getItem('data')!).data;
console.log(dataFromLocalStorage)
let cardsToRevise: Card[];


function getCardsFromCategory(category: Category): Card[] {
  let cards: Card[] = []
  const themes = category.themes
  for (const theme of themes) {
    const themeCards: Card[] = getCardsFromTheme(theme)
    cards = cards.concat(themeCards)
  }
  return cards
}
function getCardsFromTheme(theme: Theme): Card[] {
  return theme.cards
}

if ('selectedTheme' in revision) { //If the revision is based on a theme
  cardsToRevise = getCardsFromTheme(revision.selectedTheme)
} else { //If the revision is based on a category
  cardsToRevise = getCardsFromCategory(revision.selectedCategory)
}
const cardsToReviseBeforeFilter: Card[] = cardsToRevise
cardsToRevise = []
for (const card of cardsToReviseBeforeFilter) {
  if (shouldReviseCard(card)) {
      cardsToRevise.push(cardsToReviseBeforeFilter.find((c: Card) => c.id == card.id)!);
  }
}
console.log(cardsToRevise)

function getCardById(cardId: number): Card {
  const notFoundCard: Card = {
    id: -1,
    title: 'Card not found',
    description: 'Card not found',
    level: 0,
    completedAt: undefined
  }
  dataFromLocalStorage.categories.forEach((category: Category) => {
    category.themes.forEach((theme: Theme) => {
      theme.cards.forEach((card: Card) => {
        if (card.id === cardId) {
          return card
        }
      })
    })
  })
  return notFoundCard
}

function shouldReviseCard(card: Card): boolean {
  const realCard: Card = getCardById(card.id)
  if (!realCard.completedAt) {
    return true
  }
  const currentDate = new Date().getDay()
  const completedAt = new Date(realCard.completedAt!).getDay()
  const diffDays = currentDate - completedAt
  return diffDays >= LEVELS[realCard.level];
}

function cancelRevision(): void {
  localStorage.removeItem('revisionStarted')
}

/*function updateCard(cardId: number, levelIncrease: boolean): void {
  let updatingDataFromLocalStorage: Data = JSON.parse(localStorage.getItem('data')!);
  updatingDataFromLocalStorage.categories.forEach((category: Category) => {
    category.themes.forEach((theme: Theme) => {
      theme.cards.forEach((card: Card) => {
        if (card.id === cardId) {
          levelIncrease? card.level++ : card.level = 0
          card.completedAt = new Date()
        }
      })
    })
  })
  localStorage.setItem('data', JSON.stringify(updatingDataFromLocalStorage))
}*/


</script>

<template>
  <main>
    <BackItem @click="cancelRevision" where-to-go="Home" />
  </main>
</template>

<style scoped>

</style>