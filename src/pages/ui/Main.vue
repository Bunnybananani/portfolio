<template>
  <main class="font-albertsans min-h-svh flex flex-col">
    <header
      class="relative h-svh bg-no-repeat bg-top bg-cover text-light"
      :style="{ backgroundImage: `url(${heroImg})` }"
    >
      <h1
        class="absolute left-4 md:left-1/6 top-1/2 -translate-y-1/2 grid place-items-center text-lg md:text-2xl opacity-70 uppercase"
      >
        <span>FASHION AND PORTRAIT</span>
        <span> PHOTOGRAPHER </span>
      </h1>
      <button class="text-button absolute top-8 left-8">omniia</button>
      <button class="text-button absolute top-8 right-8">about</button>
      <button class="text-button absolute bottom-8 left-8">portfolio</button>
      <button class="text-button absolute bottom-8 right-8">contact</button>
    </header>
  </main>
</template>

<script setup>
import heroImg from "@/shared/assets/main/main-hero-1.png";
</script>
