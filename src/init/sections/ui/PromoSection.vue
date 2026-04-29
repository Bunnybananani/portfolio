<template>
  <section class="px-4 md:px-6 grid lg:grid-cols-2 justify-between gap-x-4">
    <div class="hidden lg:block">
      <img :src="promoSectionImg1" alt="" />
    </div>
    <div class="py-4 md:py-6 flex flex-col gap-y-6 md:gap-y-12">
      <h2 class="section-title font-medium italic">
        SPECIALIZING IN FASHION AND PORTRAIT&nbsp;PHOTOGRAPHY, I&nbsp;BRING&nbsp;2+&nbsp;YEARS&nbsp;OF&nbsp;EXPERIENCE
        WORKING WITH CLOTHING&nbsp;BRANDS.
      </h2>
      <div class="grid md:grid-cols-2 gap-x-2">
        <div class="hidden md:flex mt-auto pb-34 flex-col gap-y-6">
          <div class="h-0.5 w-1/3 bg-dark"></div>
          <p class="promo-section-info font-medium">Based in Yerevan. Open&nbsp;for creative&nbsp;collaborations.</p>
        </div>
        <div class="flex flex-col gap-y-6 md:gap-y-10">
          <div class="flex flex-col items-start gap-y-4">
            <p class="section-text">
              Photography is how I capture the beauty of the world around us. I’m just here to share that vision through
              my lens. Let’s create something together
            </p>
            <DefaultButton label="Get Started" />
          </div>
          <img :src="promoSectionImg2" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { DefaultButton } from "@/shared/components/button";

import promoSectionImg1 from "@/shared/assets/main/promo-section-1.png";
import promoSectionImg2 from "@/shared/assets/main/promo-section-2.png";
</script>
