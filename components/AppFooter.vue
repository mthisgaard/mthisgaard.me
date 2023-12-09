<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-2 border-gray mt-12">
    <div class="text-gray-400 text-right mt-8">
      &copy; {{ currentYear }} | Malene Thisgaard. All rights reserved.
    </div>
  </footer>
</template>
