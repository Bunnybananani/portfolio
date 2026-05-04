<template>
  <PortfolioDesktop class="hidden sm:flex" />
  <PortfolioMobile class="flex sm:hidden" />
</template>

<script setup>
import PortfolioDesktop from "./desktop/PortfolioDesktop.vue";
import PortfolioMobile from "./mobile/PortfolioMobile.vue";
</script>
