<script setup lang="ts">
function submitForm() {
  console.log('submitForm') //TODO : implement
}
</script>

<template>
  <main>
    <h1>Create a new theme</h1>
    <form>
      <label for="themeName">Theme name</label>
      <input type="text" id="themeName" placeholder="Type a name..." @keyup.enter="submitForm"/>
      <button type="submit">Create</button>
    </form>
  </main>
</template>

<style scoped>

</style>