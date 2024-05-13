<script setup lang="ts">
  import router from '@/router'

  let revision = localStorage.getItem('revision');
  if (revision) {
    let parsedRevision = JSON.parse(revision);
    if (parsedRevision.started && new Date().getTime() - parsedRevision.startTime < 900000) {
      router.push('/revision');
    }
  }

  function startRevision() {
    let revision: {started: boolean; startTime: number} = {
        started: true,
        startTime: new Date().getTime()
    }
    localStorage.setItem('revision', JSON.stringify(revision));

    router.push('/revision')
  }
</script>

<template>
  <main>
    <h1> Welcome to HapplyMemory :) </h1>
    <button @click="startRevision">Start revision</button>
  </main>
</template>
