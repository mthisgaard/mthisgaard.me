<script setup lang="ts">
import { projects } from '../constants'
useHead({
  title: 'Projects | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>{{ $t('projectsPage.title') }}</h1>
    <div v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  </section>
</template>
