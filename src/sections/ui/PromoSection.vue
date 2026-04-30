<template>
  <PromoDesktop class="hidden md:grid" />
  <PromoMobile class="block md:hidden" />
</template>

<script setup>
import PromoDesktop from "./desktop/PromoDesktop.vue";
import PromoMobile from "./mobile/PromoMobile.vue";
</script>
