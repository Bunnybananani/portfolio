<template>
  <main class="font-albertsans min-h-svh flex flex-col overflow-hidden">
    <HeroSection />
    <PromoSection />
    <AboutSection />
    <SliderSection />
    <PortfolioSection />
  </main>
</template>

<script setup>
import { AboutSection, HeroSection, PortfolioSection, PromoSection, SliderSection } from "@/init/sections";
</script>
