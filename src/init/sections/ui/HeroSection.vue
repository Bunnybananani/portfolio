<template>
  <header
    class="relative h-svh bg-no-repeat bg-top-left bg-cover text-light"
    :style="{ backgroundImage: `url(${heroImg})` }"
  >
    <h1 class="absolute left-1/6 top-1/2 -translate-y-1/2 grid place-items-center hero-button-span opacity-70">
      <span>FASHION AND PORTRAIT</span>
      <span>PHOTOGRAPHER</span>
    </h1>
    <button class="text-button hero-button-text absolute top-8 left-8">omniia</button>
    <button class="text-button hero-button-text absolute top-8 right-8">about</button>
    <button class="text-button hero-button-text absolute bottom-8 left-8">portfolio</button>
    <button class="text-button hero-button-text absolute bottom-8 right-8">contact</button>
  </header>
</template>

<script setup>
import heroImg from "@/shared/assets/main/main-hero-1.png";
</script>
