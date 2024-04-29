<template>
  <div
    class="flex flex-col gap-12 mb-12 lg:mb-20 lg:items-center lg:gap-20 lg:flex-row"
  >
    <div>
      <img
        class="rounded-xl sm:max-w-[440px] shadow-xl dark:grayscale"
        :src="`/malene.jpg`"
        alt="Malene"
      />
    </div>
    <div>
      <h1 class="mt-0 text-5xl md:text-8xl">{{ $t('hero.name') }}</h1>
      <h3 class="text-3xl">{{ $t('hero.title') }}</h3>
      <div class="flex gap-6 text-[24px] mt-4">
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="https://github.com/mthisgaard"
          target="_blank"
        >
          <FA :icon="['fab', 'github']" />
        </a>
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="https://www.linkedin.com/in/malenethisgaard/"
          target="_blank"
        >
          <FA :icon="['fab', 'linkedin']" />
        </a>
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="mailto:malene.thisgaard@gmail.com"
          target="_blank"
        >
          <FA :icon="['far', 'envelope']" />
        </a>
      </div>
    </div>
  </div>
</template>
