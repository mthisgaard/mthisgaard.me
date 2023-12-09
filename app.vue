<script setup lang="ts">
useHead({
	title: 'Portfolio | Malene Thisgaard',
	meta: [
		{ name: 'description', content: 'Portfolio site for Malene Thisgaard, Full Stack Engineer based in Tokyo Japan.' }
	],
})
useSeoMeta({
	ogTitle: 'Malene Thisgaard | Portfolio',
	description: 'Portfolio site for Malene Thisgaard, Full Stack Engineer based in Tokyo Japan.',
	ogDescription: 'Portfolio site for Malene Thisgaard, Full Stack Engineer based in Tokyo Japan.',
	ogImage: '',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
