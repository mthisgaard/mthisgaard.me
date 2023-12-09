<script setup lang="ts">
import { skills } from '../constants'
useHead({
  title: 'Skills | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>Skills</h1>
    <div class="flex flex-wrap justify-center gap-12 mt-16">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="flex flex-col items-center gap-2 group w-[100px]"
      >
        <img
          :src="skill.icon"
          :alt="skill.title"
          class="w-[30px] md:w-[40px]"
        />
        <p class="text-center text-gray-500 opacity-0 group-hover:opacity-100">
          {{ skill.title }}
        </p>
      </div>
    </div>
  </section>
</template>
