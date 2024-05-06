<template>
  <h2>La liste des cartes</h2>

  <CardItem
    v-for="todo in list"
    v-bind:todo="todo"
    :key="todo.id"
    @update:completed="toogleTodo($event, todo)"
  ></CardItem>
</template>
<script setup lang="ts">
import { useTodoStore } from '@/stores/todos'
import type { Todo } from '../models/Todo'
import CardItem from './CardItem.vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ showAll?: boolean }>(), {
  showAll: true
})
const todoStore = useTodoStore()

const list = computed(() => {
  return props.showAll ? todoStore.todoList : todoStore.remainingTodo
})

const toogleTodo = (event: boolean, todo: Todo) => {
  todoStore.manageTodoToggle(todo)
}
</script>
