<script setup lang="ts">
import { onMounted, defineEmits, ref, type Ref } from 'vue'
import router from '@/router'
import { isRevisionStarted } from '@/services/revisionService'
import type { Card } from '@/models/Card'
import type { Theme } from '@/models/Theme'
import type { Category } from '@/models/Category'
import { LEVELS } from '@/models/Levels'
import BackItem from '@/components/BackItem.vue'
import type { Data } from '@/models/Data'
import CardYesNoSelector from '@/components/cardYesNoSelector.vue'
import CardItem from '@/components/CardItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Lets practice !')
})

if (!isRevisionStarted()) {
  router.push('home');
}

const revision = JSON.parse(localStorage.getItem('revisionStarted')!);
const dataFromLocalStorage: Data = JSON.parse(localStorage.getItem('data')!).data;
let displayAnswer = ref(false);
let cardsToRevise: Ref<Card[]> = ref([]);
let noCardToReviseAnymore: Ref<boolean> = ref(false);

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
  cardsToRevise.value = getCardsFromTheme(revision.selectedTheme)
} else { //If the revision is based on a category
  cardsToRevise.value = getCardsFromCategory(revision.selectedCategory)
}
const cardsToReviseBeforeFilter: Card[] = cardsToRevise.value
cardsToRevise.value = []
for (const card of cardsToReviseBeforeFilter) {
  if (shouldReviseCard(card)) {
      cardsToRevise.value.push(cardsToReviseBeforeFilter.find((c: Card) => c.id == card.id)!);
  }
}

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

function updateCard(levelIncrease: boolean): void {
  let updatingDataFromLocalStorage: Data = JSON.parse(localStorage.getItem('data')!).data;
  const cardId: number = cardsToRevise.value[0].id
  updatingDataFromLocalStorage.categories.forEach((category: Category) => {
    category.themes.forEach((theme: Theme) => {
      theme.cards.forEach((card: Card) => {
        if (card.id === cardId) {
          levelIncrease? card.level++ : card.level = 1
          card.completedAt = new Date()
        }
      })
    })
  })
  localStorage.setItem('data', JSON.stringify({ data: updatingDataFromLocalStorage }));
  cardsToRevise.value.shift();
  revealAnswer()
  if (cardsToRevise.value.length == 0) {
    noCardToReviseAnymore.value = true;
    cancelRevision()
  }
}

function revealAnswer(): void {
  displayAnswer.value = !displayAnswer.value
}

</script>

<template>
  <main>
    <p v-if="noCardToReviseAnymore">There is no card anymore, yoohooo !</p>
    <CardItem v-if="!noCardToReviseAnymore" :id="cardsToRevise[0].id" :title="cardsToRevise[0].title"
              :description="cardsToRevise[0].description" :revision="true"
              :display-answer="displayAnswer" />
    <button v-if="!displayAnswer && !noCardToReviseAnymore" @click="revealAnswer">Reveal answer</button>
    <card-yes-no-selector v-if="displayAnswer && !noCardToReviseAnymore" @answer="updateCard" />
    <BackItem v-if="!noCardToReviseAnymore" text="Cancel revision" @click="cancelRevision" where-to-go="Home" />
    <BackItem v-if="noCardToReviseAnymore" text="Return home" where-to-go="Home" />
  </main>
</template>

<style scoped>

</style>