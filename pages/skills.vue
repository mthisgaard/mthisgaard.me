<script setup lang="ts">
import { skillTypes } from '../constants'
useHead({
  title: 'Skills | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>Skills</h1>
    <div class="pt-12 mt-8 max-w-[800px]">
      <div
        v-for="skillType in skillTypes"
        :key="skillType.title"
        class="grid gap-6 pb-12 sm:grid-cols-3"
      >
        <div class="border-l-2 border-gray-500 w-[200px]">
          <p class="pl-8 font-bold">
            {{ skillType.title }}
          </p>
        </div>
        <div class="flex flex-wrap col-span-2 gap-2">
          <div
            v-for="skill in skillType.skills"
            :key="skill"
            class="px-4 py-2 font-semibold text-gray-100 bg-gray-800 rounded-full opacity-80"
          >
            <p class="text-sm">{{ skill }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
