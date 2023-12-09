<script setup lang="ts">
import { projects } from '../constants'
useHead({
  title: 'Projects | Malene Thisgaard',
})
</script>

<template>
  <section>
    <h1>Projects</h1>
    <div>
      <div
        v-for="project in projects"
        :key="project.name"
        :class="`s${project.id !== 1 ? 'border-t-2 mt-6 pt-12' : ''} ${
          project.id % 2 === 0 ? 'sectionReverse' : 'section'
        }`"
      >
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-[300px] xs:w-[650px] xs:h-[550px] object-cover object-left-top hover:object-scale-down"
        />
        <div>
          <div>
            <h2 class="text-2xl">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p>Role: {{ project.role }}</p>
            <p class="mb-4">Tech: {{ project.tech }}</p>
          </div>
          <div
            :class="`flex gap-3 text-sm ${
              project.id % 2 === 0 ? 'md:justify-end' : ''
            }`"
          >
            <a
              :href="project.url"
              target="_blank"
              class="px-4 py-2 duration-500 transform bg-gray-300 rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1"
              >Website</a
            >
            <a
              :href="project.git"
              target="_blank"
              class="px-4 py-2 duration-500 transform bg-gray-300 rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1"
              >GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
