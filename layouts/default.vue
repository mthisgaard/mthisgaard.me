<template>
  <div class="bg-[#FAFAFA]">
    <div class="flex justify-center">
      <div
        class="flex flex-col max-w-[1280px] w-full bg-white min-h-screen shadow-md px-8 md:px-24"
      >
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>
