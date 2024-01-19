<script setup lang="ts">
useHead({
  title: 'Portfolio | Malene Thisgaard',
  meta: [
    {
      name: 'description',
      content: 'Portfolio site for Malene Thisgaard, Full Stack Developer',
    },
  ],
})
useSeoMeta({
  ogTitle: 'Malene Thisgaard | Portfolio',
  description: 'Portfolio site for Malene Thisgaard, Full Stack Developer',
  ogDescription: 'Portfolio site for Malene Thisgaard, Full Stack Developer',
  ogImage: '/malene.jpg',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="h-full lg:mb-10" />
  </NuxtLayout>
</template>
