<template>
  <PromoDesktop class="hidden sm:grid" />
  <PromoMobile class="block sm:hidden" />
</template>

<script setup>
import PromoDesktop from "./desktop/PromoDesktop.vue";
import PromoMobile from "./mobile/PromoMobile.vue";
</script>
