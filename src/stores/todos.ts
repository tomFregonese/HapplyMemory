import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/models/Todo'

export const useTodoStore = defineStore('todo', () => {
  const todoList: Ref<Todo[]> = ref([])

  function addTodo(item: Todo) {
    if (item.id === undefined) {
      item.id = maxTodoId.value + 1
    }
    if (item.completed === undefined) {
      item.completed = false
    }
    todoList.value.push(item)
  }

  function createTodo(title: string) {
    if (title.trim().length > 0) {
      const newTodo = {
        title: title,
        completed: false
      }
      addTodo(newTodo)
      console.log(`Le todo ${newTodo.title} a été créé`)
    }
  }
  const maxTodoId = computed(() =>
    todoList.value.reduce((acc: number, currentValue: Todo): number => {
      if (currentValue.id) {
        return acc > currentValue.id ? acc : currentValue.id
      } else {
        return acc
      }
    }, 0)
  )
  const remainingTodo = computed(() => todoList.value.filter((item: Todo) => !item.completed))

  function manageTodoToggle(todo: Todo) {
    const t = todoList.value.find((e: Todo) => e.id === todo.id)
    if (t) {
      t.completed = !t.completed
    }
  }
  return {
    todoList,
    addTodo,
    remainingTodo,
    manageTodoToggle,
    createTodo
  }
})
