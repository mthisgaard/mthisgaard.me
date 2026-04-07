<template>
  <div
    class="flex flex-col gap-12 mb-12 lg:mb-18 lg:items-center lg:gap-20 lg:flex-row"
  >
    <div>
      <img
        class="rounded-xl sm:max-w-[300px] shadow-xl dark:grayscale"
        :src="`/malene.jpg`"
        alt="Malene"
      />
    </div>
    <div>
      <h1 class="mt-0 text-5xl md:text-7xl">MALENE</h1>
      <h1 class="mt-0 text-5xl md:text-7xl">THISGAARD</h1>
      <h3 class="text-2xl">{{ $t('hero.title') }}</h3>
      <div class="flex gap-6 text-[24px] mt-5">
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="https://github.com/mthisgaard"
          target="_blank"
        >
          <PhosphorIcon name="github-logo" :size="28" />
        </a>
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="https://www.linkedin.com/in/malenethisgaard/"
          target="_blank"
        >
          <PhosphorIcon name="linkedin-logo" :size="28" />
        </a>
        <a
          class="opacity-80 hover:opacity-100 hoverLift"
          href="mailto:m.thisgaard@proton.me"
          target="_blank"
        >
          <PhosphorIcon name="at" :size="28" />
        </a>
      </div>
    </div>
  </div>
</template>
