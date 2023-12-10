<template>
  <header class="flex justify-between mt-16 mb-16">
    <NuxtLink class="text-2xl font-bold" to="/"> MT </NuxtLink>
    <div class="flex items-center gap-8">
      <nav>
        <ul class="flex gap-6 text-lg">
          <li class="hoverLift">
            <NuxtLink to="/skills" class="pb-1 hover:border-b-2">
              Skills
            </NuxtLink>
          </li>
          <li class="hoverLift">
            <NuxtLink to="/projects" class="pb-1 hover:border-b-2">
              Projects
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <a
        href="/resume_malene_thisgaard.pdf"
        download
        class="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg opacity-80 hover:opacity-100 hoverLift"
      >
        <span class="mr-2">Resume</span>
        <FA :icon="['fas', 'download']" />
      </a>
    </div>
  </header>
</template>
