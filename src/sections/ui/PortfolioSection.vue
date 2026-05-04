<template>
  <section id="portfolio">
    <PortfolioDesktop class="hidden sm:flex" />
    <PortfolioMobile class="flex sm:hidden" />
  </section>
</template>

<script setup>
import PortfolioDesktop from "./desktop/PortfolioDesktop.vue";
import PortfolioMobile from "./mobile/PortfolioMobile.vue";
</script>
