<script setup lang="ts">
import type { Skill } from '../types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  category: {
    type: Object as PropType<Skill>,
    required: true,
  },
})
</script>

<template>
  <div class="grid gap-6 pb-12 mt-16 sm:grid-cols-3 max-w-[800px]">
    <div class="border-l-2 border-gray-500 w-[200px]">
      <p class="pl-8 font-bold">
        {{ category.title }}
      </p>
    </div>
    <div class="flex flex-wrap col-span-2 gap-2">
      <div
        v-for="skill in category.skills"
        :key="skill"
        class="px-4 py-2 font-semibold text-gray-100 bg-gray-800 rounded-full opacity-80"
      >
        <p class="text-sm">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>
