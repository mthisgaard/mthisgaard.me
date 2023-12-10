<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-12 mb-8 border-t-2 border-gray-400">
    <div class="mt-8 text-gray-400">
      &copy; {{ currentYear }} | Malene Thisgaard. All rights reserved.
    </div>
  </footer>
</template>
