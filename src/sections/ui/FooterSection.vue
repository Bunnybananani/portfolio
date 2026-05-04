<template>
  <FooterDesktop class="hidden md:flex" />
  <FooterMobile class="flex md:hidden" />
</template>

<script setup>
import FooterDesktop from "./desktop/FooterDesktop.vue";
import FooterMobile from "./mobile/FooterMobile.vue";
</script>
