<template>
  <section class="pt-4 px-3">
    <h2 class="mb-4 grid text-center text-4xl font-semibold uppercase">
      <span>FASHION AND</span>
      <span>PORTRAIT</span>
    </h2>
    <div class="mb-6 flex gap-x-2">
      <div class="flex-1/3 flex items-end">
        <img :src="aboutSectionImg1" alt="" />
      </div>
      <div class="flex-2/3 flex flex-col">
        <img class="w-2/5" :src="aboutSectionImg2" alt="" />
        <p class="pt-4 px-8 text-xxs normal-case opacity-70">
          A gentle and mindful approach to photography. Whether working with a brand or an individual, my focus is on
          authentic emotions and cinematic aesthetics.
        </p>
      </div>
    </div>
    <p class="px-6 text-xs font-medium italic uppercase">
      I love sharing the beauty of this world through my lens, using light to create. a cinematic feel. I believe every
      frame should feel real and effortless.
    </p>
  </section>
</template>

<script setup>
import { ArrowShortIcon } from "@/shared/components/icon";

import aboutSectionImg1 from "@/shared/assets/main/about-section-1.png";
import aboutSectionImg2 from "@/shared/assets/main/about-section-2.png";
</script>
