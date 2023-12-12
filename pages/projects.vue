<script setup lang="ts">
import { projects } from '../constants'
useHead({
  title: 'Projects | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.name">
      <ProjectCard :project="project" />
    </div>
  </section>
</template>
