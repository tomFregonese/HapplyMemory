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
  top: 0;
  padding: 5vh 10vw 0 10vw;
  left: 0; right: 0;
  text-align: center;
  max-height: 20vh;
  min-height: 15vh;
  height: max-content;
}


main {
  position: absolute;
  top: 15vh;
  left: 0; right: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 75vh;
  min-height: 75vh;
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
  bottom: 0;
  text-align: center;
  height: 3.5vh;
  margin-bottom: 1.5vh;
  left: 0; right: 0;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

  a {
    text-align: center;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    color: var(--color-text);

      :hover {
        background-color: transparent;
      }
    }
  }

.content {
  bottom: 10vh;
  left: 0; right: 0;
  overflow: auto;
}

::-webkit-scrollbar {
  display: none;
}

.footer {
  position: fixed;
  bottom: 5vh;
  left: 0; right: 0;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  button:disabled {
    background-color: #333333;
    color: #888888;
  }
}

</style>
