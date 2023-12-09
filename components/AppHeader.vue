<template>
  <header class="flex justify-between mt-8 mb-16">
    <NuxtLink class="text-2xl font-bold" to="/"> MT </NuxtLink>
    <nav>
      <ul class="flex gap-6">
        <li>
          <NuxtLink to="/skills"> Skills </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects"> Projects </NuxtLink>
        </li>
        <li>
          <a
            href="/resume_malene_thisgaard.pdf"
            download
            class="px-4 py-2 duration-500 transform bg-gray-300 rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1"
          >
            <span class="mr-2">Resume</span>
            <FA :icon="['fas', 'download']" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
