<template>
  <button type="button" @click="load">Charger les todos</button>
  <label for="showAll">Voir tous les todos</label>
  <input type="checkbox" id="showAll" v-model="voirTout" />
  <br />
  <label for="newTodo">Nouveau todo</label>
  <input type="text" name="newTodo" id="newTodo" v-model="todoTitle" />
  <br />
  <button type="button" @click="createTodo">Ajouter</button>
  <br />
  <TodoList :showAll="voirTout"></TodoList>
  <button type="button" @click="persist">Sauvegarder</button>
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TodoList from '../components/CardList.vue'
import { useTodoStore } from '@/stores/todos'

const voirTout: Ref<boolean> = ref(true)
const todoTitle: Ref<string> = ref('')

const todoStore = useTodoStore()

function createTodo() {
  todoStore.createTodo(todoTitle.value)
  todoTitle.value = ''
}

function persist() {
  window.localStorage.setItem('todos', JSON.stringify(todoStore.todoList))
}

function load() {
  const todoListStringyfied = window.localStorage.getItem('todos')
  if (todoListStringyfied && todoListStringyfied.length > 0) {
    todoStore.todoList = JSON.parse(todoListStringyfied)
  }
}
</script>
