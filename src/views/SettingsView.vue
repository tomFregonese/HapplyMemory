<script setup lang="ts">
import { onMounted, defineEmits } from 'vue'
import dataSet from '../dataset/minifiedData.json'

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'Settings')
})

const overwriteDataWithDataSet = () => {
  localStorage.setItem('data', JSON.stringify(dataSet))
}
</script>

<template>
  <main>
    <p>There is no settings available yet :(</p>
    <br><br><button @click="overwriteDataWithDataSet">Overwrite dataset (permanent)</button>
  </main>
</template>

<style>

</style>
