<template>
  <svg :class="class" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" />
  </svg>
</template>

<script setup>
defineProps({
  class: String,
});
</script>
