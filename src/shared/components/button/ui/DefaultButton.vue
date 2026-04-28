<template>
  <button
    class="py-3.5 px-10.5 bg-dark text-light text-xl font-medium transition-opacity hover:opacity-70 active:opacity-70"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({ label: String });
</script>
