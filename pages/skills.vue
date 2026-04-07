<script setup lang="ts">
import { skillCategories } from '../constants'
const { t } = useI18n()
useHead({
  title: () => `${t('skillsPage.title')} | Malene Thisgaard`,
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
