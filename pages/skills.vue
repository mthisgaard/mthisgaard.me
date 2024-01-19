<script setup lang="ts">
import { skillCategories } from '../constants'
useHead({
  title: 'Skills | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>{{ $t(`skillsPage.title`) }}</h1>
    <div class="mt-16">
      <div v-for="skillCategory in skillCategories" :key="skillCategory.key">
        <SkillCard :category="skillCategory" />
      </div>
    </div>
  </section>
</template>
