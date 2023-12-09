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
        :class="`${project.id % 2 === 0 ? 'sectionReverse' : 'section'}`"
      >
        <a :href="project.url" target="_blank">
          <div class="relative flex">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              :class="`${
                project.id === 2
                  ? 'mt-6 object-fit w-[200px] h-[200px] mr-[200px]'
                  : 'object-cover w-[400px] h-[400px]'
              }  xs:w-[550px] xs:h-[450px]  object-left-top hover:object-scale-down`"
            />
          </div>
        </a>
        <div class="flex-col flex-1">
          <div class="mt-6">
            <h2>{{ project.name }}</h2>
            <p class="mb-4">{{ project.description }}</p>
            <p><span class="font-bold">Role: </span> {{ project.role }}</p>
            <p class="mb-4">
              <span class="font-bold">Tech: </span> {{ project.tech }}
            </p>
          </div>
          <div
            :class="`flex gap-3 text-sm ${
              project.id % 2 === 0 ? 'md:justify-end' : ''
            }`"
          >
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="px-4 py-2 duration-500 transform bg-gray-300 rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1"
            >
              {{
                project.name === 'JobJob' ? 'Pitch Presentation' : 'Website'
              }}</a
            >
            <a
              v-if="project.git"
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
