<template>
  <div class="mb-12">
    <div class="max-w-[640px] mb-16">
      <h3 class="mb-4 text-3xl font-semibold md:text-4xl">
        {{ $t('about.title') }}
      </h3>
      <div>
        <p class="mt-4">
          {{ $t('about.section1') }}
        </p>
        <p class="mt-4">
          {{ $t('about.section2') }}
        </p>
      </div>
    </div>
    <div class="hoverLift">
      <a
        href="https://www.linkedin.com/in/malenethisgaard/"
        download
        class="px-6 py-4 text-2xl text-gray-100 bg-gray-800 rounded-lg"
      >
        {{ $t('about.connectBtn') }}
      </a>
    </div>
  </div>
</template>
