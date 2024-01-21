<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: t('head.title'),
  meta: [
    {
      name: 'description',
      content: t('head.description'),
    },
  ],
})
useSeoMeta({
  ogTitle: t('head.title'),
  description: t('head.description'),
  ogDescription: t('head.description'),
  ogImage: '/malene.jpg',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="h-full lg:mb-10" />
  </NuxtLayout>
</template>
