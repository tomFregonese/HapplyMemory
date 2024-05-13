import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Card } from '@/models/Card'

export const useCardStore = defineStore('card', () => {
  const cardList: Ref<Card[]> = ref([])

  function addCard(item: Card) {
    if (item.id === undefined) {
      item.id = maxCardId.value + 1
    }
    if (item.completed === undefined) {
      item.completed = false
    }
    cardList.value.push(item)
  }

  function createACard(title: string) {
    if (title.trim().length > 0) {
      const newCard = {
        description: title,
        completed: false
      }
      addCard(newCard)
      console.log(`New "${newCard.description}" card juste created.`)
    }
  }
  const maxCardId = computed(() =>
    cardList.value.reduce((acc: number, currentValue: Card): number => {
      if (currentValue.id) {
        return acc > currentValue.id ? acc : currentValue.id
      } else {
        return acc
      }
    }, 0)
  )
  const remainingCard = computed(() => cardList.value.filter((item: Card) => !item.completed))

  function manageCardToggle(card: Card) {
    const t = cardList.value.find((e: Card) => e.id === card.id)
    if (t) {
      t.completed = !t.completed
    }
  }
  return {
    cardList: cardList,
    addCard: addCard,
    remainingCard: remainingCard,
    manageCardToggle: manageCardToggle,
    createCard: createACard
  }
})
