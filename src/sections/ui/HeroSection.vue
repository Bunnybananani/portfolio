<template>
  <HeroDesktop class="hidden lg:block" />
  <HeroMobile class="block lg:hidden" />
</template>

<script setup>
import HeroDesktop from "./desktop/HeroDesktop.vue";
import HeroMobile from "./mobile/HeroMobile.vue";
</script>
