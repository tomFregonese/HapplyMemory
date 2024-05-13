<template>
  <label for="showAll">See all cards</label>
  <input type="checkbox" id="showAll" v-model="seeAll" />
  <br />
  <input type="text" name="newCard" placeholder="New card" id="newCard" v-model="cardDescription" @keyup.enter="createACard" />
  <button type="button" @click="createACard">Ajouter</button>
  <br />
  <TodoList :showAll="seeAll"></TodoList>
  <button type="button" @click="persist">Sauvegarder</button>
</template>
<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import TodoList from '../components/CardList.vue'
import { useCardStore } from '@/stores/cards'

const seeAll: Ref<boolean> = ref(true)
const cardDescription: Ref<string> = ref('')

const cardStore = useCardStore()

function createACard() {
  cardStore.createCard(cardDescription.value)
  cardDescription.value = ''
}

function persist() {
  window.localStorage.setItem('todos', JSON.stringify(cardStore.cardList))
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
