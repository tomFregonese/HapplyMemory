<template>
  <div @click="toogleTodo" class="todo" :class="{ completed: card.completed }">
    <b-card class="card">
      <h2>{{ card.description }}</h2>
      <b-card-text>{{ card.completed ? 'Done' : 'Not done' }}</b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts" setup>
import type { Card } from '../models/Card'

const props = defineProps<{ card: Card }>()

const emits = defineEmits<{
  (e: 'update:completed', completed: boolean): void
}>()

const toogleTodo = () => {
  console.log(`le todo ${props.card.description} a emis update : ${!props.card.completed}`)
  emits('update:completed', !props.card.completed)
}
</script>
<style scoped>
card {
  border-radius: 5px;
}

div.todo.completed {
  color: blue;
}

.todo {
  color: red;
}

.completed {
  color: lightgreen;
}
</style>
