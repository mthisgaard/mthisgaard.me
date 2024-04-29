<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const route = useRoute()

const otherLocale = computed(() => {
  return locales.value.find((i) => i.code !== locale.value)
})

const linkStyle = computed(() => {
  return (path) => {
    return route.path === path ? 'border-b-2' : 'hover:border-b-2 border-gray-800 dark:border-gray-200'
  }
})

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <header class="flex flex-row justify-between gap-4 my-8 md:my-16">
    <NuxtLink class="text-2xl font-bold hoverLift" :to="localePath('index')">
      MT
    </NuxtLink>
    <div
      class="flex flex-col-reverse items-end justify-between gap-4 md:items-center md:flex-row md:gap-8"
    >
      <nav>
        <ul class="flex gap-6 text-lg">
          <li class="hoverLift">
            <NuxtLink
              :to="localePath('skills')"
              :class="`pb-1 ${linkStyle(localePath('skills'))}`"
            >
              {{ $t('header.pages.skills') }}
            </NuxtLink>
          </li>
          <li class="hoverLift">
            <NuxtLink
              :to="localePath('projects')"
              :class="`pb-1 ${linkStyle(localePath('projects'))}`"
            >
              {{ $t('header.pages.projects') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-6">
        <NuxtLink
          :key="otherLocale.code"
          :to="switchLocalePath(otherLocale.code)"
        >
          <img
            class="w-8 h-8 rounded-full opacity-80 hover:opacity-100 hoverLift"
            :src="`/${otherLocale.code}.jpg`"
          />
        </NuxtLink>
        <div @click="toggleTheme" class="opacity-80 hover:opacity-100 hoverLift">
          <FA
            v-show="colorMode.preference === 'light'"
            :icon="['fas', 'moon']"

          />
          <FA
            v-show="colorMode.preference === 'dark'"
            :icon="['fas', 'sun']"
          />
        </div>
      </div>
    </div>
  </header>
</template>
