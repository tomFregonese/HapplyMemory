<script setup lang="ts">

const emit = defineEmits(['answer']);

function selectAnswer(answer: boolean): void {
  emit('answer', answer);
}

</script>

<template>
  <div>
    <p>Did you have the right answer?</p>
    <span>
      <button @click="selectAnswer(true)">Yes</button>
      <button @click="selectAnswer(false)">No</button>
    </span>
  </div>
</template>

<style scoped>
span {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>