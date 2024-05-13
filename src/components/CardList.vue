<template>
  <h2>La liste des cartes</h2>

  <CardItem
    v-for="card in list"
    v-bind:card="card"
    :key="card.id"
    @update:completed="toogleCard($event, card)"
  ></CardItem>
</template>
<script setup lang="ts">
import { useCardStore } from '@/stores/cards'
import type { Card } from '../models/Card'
import CardItem from './CardItem.vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ showAll?: boolean }>(), {
  showAll: true
})
const todoStore = useCardStore()

const list = computed(() => {
  return props.showAll ? todoStore.cardList : todoStore.remainingCard
})

const toogleCard = (event: boolean, todo: Card) => {
  todoStore.manageCardToggle(todo)
}
</script>
