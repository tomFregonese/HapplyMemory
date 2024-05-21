<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import Back from '@/components/BackItem.vue'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Create a theme')
})

function submitForm() {
  console.log('submitForm') //TODO : implement
}
</script>

<template>
  <main>
    <form>
      <label for="themeName">Theme name</label>
      <input type="text" id="themeName" placeholder="Type a name..." @keyup.enter="submitForm"/>
      <button type="submit">Create</button>
      <Back text="Cancel" />
    </form>
  </main>
</template>

<style scoped>

</style>