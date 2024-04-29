<template>
  <div class="dark:bg-[#3A3B5A] text-gray-800 dark:text-gray-200">
    <div class="flex justify-center">
      <div
        class="flex flex-col max-w-[1280px] w-full min-h-screen px-8 md:px-24 bg-opacity-70"
      >
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>
