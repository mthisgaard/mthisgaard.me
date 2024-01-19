<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="grid gap-6 pb-12 sm:grid-cols-3 max-w-[800px]">
    <div class="border-l-2 border-gray-500 w-[200px]">
      <p class="pl-8 font-bold">
        {{ $t(`skillCategories.${category.key}.title`) }}
      </p>
    </div>
    <div class="flex flex-wrap col-span-2 gap-2">
      <div
        v-for="i in category.count"
        :key="i"
        class="px-4 py-2 font-semibold text-gray-100 bg-gray-800 rounded-full opacity-80"
      >
        <p class="text-sm">
          {{ $t(`skillCategories.${category.key}.skills.${i}`) }}
        </p>
      </div>
    </div>
  </div>
</template>
