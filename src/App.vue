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

  <body>
    <RouterView @title="updateTitle" />
  </body>

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
  height: 15%;
}


main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

button {
  background-color: var(--vt-c-light-green);
  color: white;
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 0.5em 0.25em ;
  cursor: pointer;
  border-radius: 1em;
  border: none;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  color: #888888;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  input, textarea {
    background-color: var(--color-background);
    color: var(--color-text);
    padding: 1em 1em;
    margin: 0.15em 0.25em;
    font-size: 1em;
    border-radius: 1em;
    border: 2px solid var(--vt-c-light-green);

    :hover {
      border-color: #45a049;
    }

  }

}


footer {
  position: fixed;
  bottom: 1em;
  width: 100%;

  line-height: 1.5;
  max-height: 100vh;

  left: 0;
  text-align: center;

  height: 10%;

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

@media (prefers-color-scheme: dark) {
  button:disabled {
    background-color: #333333;
    color: #888888;
  }
}

</style>
