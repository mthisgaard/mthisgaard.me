<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div :class="`${project.id % 2 === 0 ? 'sectionReverse' : 'section'}`">
    <a :href="project.url" target="_blank">
      <div class="relative flex bg-gray-100 rounded-lg">
        <img
          v-if="project.image"
          :src="project.image"
          :class="`${
            project.id === 2
              ? 'object-scale-down bg-gray-100'
              : 'object-cover object-left-top'
          } aspect-square w-full md:w-[250px] md:h-[250px] rounded-lg shadow-xl`"
        />
      </div>
    </a>
    <div class="flex-col flex-1">
      <div>
        <h2 class="mb-4">
          {{ $t(`projects.${project.id}.name`) }}
        </h2>
        <p class="mb-4">{{ $t(`projects.${project.id}.description`) }}</p>
        <p class="mb-4">
          <span class="font-bold">Tech: </span> {{ project.tech }}
        </p>
      </div>
      <div
        :class="`flex gap-3 text-sm font-semibold ${
          project.id % 2 === 0 ? 'md:justify-end' : ''
        }`"
      >
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          class="flex px-4 py-2 text-gray-100 bg-gray-800 rounded-lg opacity-80 hover:opacity-100 hoverLift"
        >
          <span class="mr-2">{{
            project.id === 6 ? $t(`projectsPage.presentation`) : 'Website'
          }}</span>
          <PhosphorIconArrowSquareOut
            :size="16"
            weight="bold"
            class="self-center"
          />
        </a>
        <a
          v-if="project.git"
          :href="project.git"
          target="_blank"
          class="flex px-4 py-2 text-gray-100 bg-gray-800 rounded-lg opacity-80 hover:opacity-100 hoverLift"
        >
          <span class="mr-2">GitHub</span>
          <PhosphorIconGithubLogo :size="16" class="self-center" />
        </a>
      </div>
    </div>
  </div>
</template>
