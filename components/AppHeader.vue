<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
<template>
  <header class="flex flex-col gap-4 my-16 md:justify-between md:flex-row">
    <NuxtLink class="text-2xl font-bold" :to="localePath('index')">
      MT
    </NuxtLink>
    <div class="flex items-center justify-between md:gap-8">
      <nav>
        <ul class="flex gap-6 text-lg">
          <li class="hoverLift">
            <NuxtLink :to="localePath('skills')" class="pb-1 hover:border-b-2">
              {{ $t('header.pages.skills') }}
            </NuxtLink>
          </li>
          <li class="hoverLift">
            <NuxtLink
              :to="localePath('projects')"
              class="pb-1 hover:border-b-2"
            >
              {{ $t('header.pages.projects') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex gap-4">
        <a
          href="/resume_malene_thisgaard.pdf"
          download
          class="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg opacity-80 hover:opacity-100 hoverLift"
        >
          <span class="mr-2">{{ $t('header.resume') }}</span>
          <FA :icon="['fas', 'download']" />
        </a>
        <div>
          <button
            class="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg opacity-80 hover:opacity-100 hoverLift"
          >
            <NuxtLink
              v-for="loc in availableLocales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              >{{ loc.name }}</NuxtLink
            >
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
