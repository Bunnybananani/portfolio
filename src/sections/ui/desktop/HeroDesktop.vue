<template>
  <header
    class="relative h-svh bg-no-repeat bg-top-left bg-cover shadow text-light"
    :style="{ backgroundImage: `url(${heroImg})` }"
  >
    <h1 class="absolute left-1/6 top-1/2 -translate-y-1/2 grid place-items-center hero-button-span opacity-70">
      <span>FASHION AND PORTRAIT</span>
      <span>PHOTOGRAPHER</span>
    </h1>
    <span class="font-semibold uppercase hero-button-text absolute top-8 left-8">omniia</span>
    <a class="text-button hero-button-text absolute top-8 right-8" @click="scrollToSection('about')">about</a>
    <a class="text-button hero-button-text absolute bottom-8 left-8" @click="scrollToSection('portfolio')">portfolio</a>
    <button class="text-button hero-button-text absolute bottom-8 right-8" @click="openContacts">contact</button>
  </header>
</template>

<script setup>
import { openContacts } from "@/entities/contacts";
import { scrollToSection } from "@/shared/libs";

import heroImg from "@/shared/assets/main/main-hero-1.png";
</script>
