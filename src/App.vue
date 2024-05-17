<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

let title = ref('')

const updateTitle = (newTitle: string) => {
  title.value = newTitle
}

</script>

<template>

  <header>
    <h1>{{ title }}</h1>
  </header>

  <RouterView @title="updateTitle" />

  <footer>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
  </footer>

</template>

<style>
header {
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  left: 0; right: 0;
  text-align: center;
}


footer {
  position: fixed;
  bottom: 1em;
  width: 100%;

  line-height: 1.5;
  max-height: 100vh;

  left: 0;
  text-align: center;

  nav {
    width: 100%;
    font-size: 1em;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem 0;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);
      color: var(--color-text);

      :hover {
        background-color: transparent;
      }
    }
  }
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background-color: #4CAF50; /* Couleur de fond */
  color: white; /* Couleur du texte */
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 0.5em 0.25em ;
  cursor: pointer;
  border-radius: 1em;
  border: none;
}

button:hover {
  background-color: #45a049; /* Changement de la couleur de fond au survol */
}


</style>
