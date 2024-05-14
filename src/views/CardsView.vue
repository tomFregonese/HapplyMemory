<script setup lang="ts">
import { ref, type Ref, onMounted, defineEmits } from 'vue'
import { useCardStore } from '@/stores/cards'
import router from '@/router'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Cards')
})

const seeAll: Ref<boolean> = ref(true)
const cardDescription: Ref<string> = ref('')

const cardStore = useCardStore()

function createACard() {
  cardStore.createCard(cardDescription.value)
  cardDescription.value = ''
}

function load() {
  const todoListStringyfied = window.localStorage.getItem('todos')
  if (todoListStringyfied && todoListStringyfied.length > 0) {
    cardStore.cardList = JSON.parse(todoListStringyfied)
  }
}

onMounted(() => {
  load()
})
</script>

<template>
  <main>
    <button @click="router.push('/create-card')">New card</button>
  </main>
</template>

<style>

</style>