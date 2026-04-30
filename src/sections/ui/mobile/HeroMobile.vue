<template>
  <header
    class="relative h-svh bg-no-repeat bg-center bg-cover shadow text-light"
    :style="{ backgroundImage: `url(${heroImg})` }"
  >
    <h1
      class="absolute top-1/5 left-1/2 -translate-x-1/2 grid place-items-center text-center text-dark opacity-70 leading-none"
    >
      <span class="font-semibold">FASHION&nbsp;AND&nbsp;PORTRAIT</span>
      <span class="font-bold">PHOTOGRAPHER</span>
    </h1>
    <button class="text-button absolute top-3 left-3 text-lg">omniia</button>
    <button class="text-button absolute top-3 right-3 text-lg">about</button>
    <button class="text-button absolute bottom-3 left-3 text-lg">portfolio</button>
    <button class="text-button absolute bottom-3 right-3 text-lg">contact</button>
  </header>
</template>

<script setup>
import heroImg from "@/shared/assets/mobile/hero-mobile.png";
</script>
