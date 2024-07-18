<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props =
  withDefaults(defineProps<{ text?: string, whereToGo?: string, categoryId?: number }>(), {
  text: 'Back',
})
function goBack() {
  if (props.whereToGo) {
      router.push({ name: props.whereToGo, params: { categoryId: props.categoryId } })
  } else
  router.back()
}
</script>

<template>
  <button @click="goBack()">{{ props.text }}</button>
</template>

<style scoped>

</style>