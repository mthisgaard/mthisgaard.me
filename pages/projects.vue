<script setup lang="ts">
import { projects } from '../constants'
const { t } = useI18n()
useHead({
  title: () => `${t('projectsPage.title')} | Malene Thisgaard`,
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
