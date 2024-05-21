<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = withDefaults(defineProps<{ text?: string }>(), {
  text: 'Back'
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <button @click="goBack">{{ props.text }}</button>
</template>

<style scoped>

</style>