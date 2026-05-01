<template>
  <AboutDesktop class="hidden md:flex" />
  <AboutMobile class="block md:hidden" />
</template>

<script setup>
import AboutDesktop from "./desktop/AboutDesktop.vue";
import AboutMobile from "./mobile/AboutMobile.vue";
</script>
