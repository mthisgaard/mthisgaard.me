<script setup lang="ts">
import { skillCategories } from '../constants'
useHead({
  title: 'Skills | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>Skills</h1>
    <div class="mt-16">
      <div v-for="skillCategory in skillCategories" :key="skillCategory.title">
        <SkillCard :category="skillCategory" />
      </div>
    </div>
  </section>
</template>
