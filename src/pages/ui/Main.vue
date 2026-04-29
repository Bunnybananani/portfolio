<template>
  <main class="font-albertsans min-h-svh flex flex-col overflow-hidden">
    <HeroSection />
    <PromoSection />
    <AboutSection />
    <SliderSection />
  </main>
</template>

<script setup>
import { AboutSection, HeroSection, PromoSection, SliderSection } from "@/init/sections";
</script>
