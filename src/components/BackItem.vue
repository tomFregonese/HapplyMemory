<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = withDefaults(defineProps<{ text?: string, whereToGo?: string }>(), {
  text: 'Back',
  whereToGo: '/',
})

function goBack() {
  if (props.whereToGo) {
    router.push(props.whereToGo)
  } else
  router.back()
}
</script>

<template>
  <button @click="goBack()">{{ props.text }}</button>
</template>

<style scoped>

</style>