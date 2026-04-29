<template>
  <section class="px-4 md:px-6 flex flex-col">
    <h2 class="about-section-title text-center font-bold">FASHION AND PORTRAIT</h2>
    <div class="flex gap-8">
      <div class="hidden lg:flex shrink-0 items-end">
        <img :src="aboutSectionImg1" alt="" />
      </div>
      <div class="pb-6 flex flex-col gap-y-6 lg:gap-y-34">
        <div class="flex flex-col sm:grid sm:grid-cols-3 gap-4">
          <div class="">
            <img :src="aboutSectionImg2" alt="" />
          </div>
          <div class="sm:pb-6 self-end">
            <p class="about-section-subtle">BEAUTY IS IN&nbsp;THE&nbsp;EYE OF&nbsp;THE BEHOLDER</p>
          </div>
          <div class="self-center">
            <p class="section-text">
              A gentle and mindful approach to photography. Whether working with a brand or an individual, my focus is
              on authentic emotions and cinematic aesthetics.
            </p>
          </div>
        </div>
        <div class="ml-auto max-w-6xl flex flex-col items-start gap-y-5">
          <p class="about-section-info italic font-medium">
            I love sharing the beauty of this world through my lens, using light to create a&nbsp;cinematic feel. I
            believe every frame should feel real and effortless.
          </p>
          <button class="flex items-center gap-x-3 transition-opacity hover:opacity-70 active:opacity-70">
            <span class="decore-span font-medium">VIEW MORE</span>
            <ArrowShortIcon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowShortIcon } from "@/shared/components/icon";

import aboutSectionImg1 from "@/shared/assets/main/about-section-1.png";
import aboutSectionImg2 from "@/shared/assets/main/about-section-2.png";
</script>
