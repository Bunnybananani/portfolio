<template>
  <section class="px-6 grid lg:grid-cols-2 justify-between gap-x-4">
    <div
      class="hidden lg:block bg-no-repeat bg-top-left bg-contain"
      :style="{ backgroundImage: `url(${promoSectionImg1})` }"
    ></div>
    <div class="py-4 md:py-8 flex flex-col gap-y-6 md:gap-y-18">
      <h2 class="first-section-title font-medium italic">
        SPECIALIZING IN FASHION AND PORTRAIT PHOTOGRAPHY, I&nbsp;BRING&nbsp;2+&nbsp;YEARS&nbsp;OF&nbsp;EXPERIENCE
        WORKING WITH CLOTHING&nbsp;BRANDS.
      </h2>
      <div class="grid md:grid-cols-2 gap-x-2">
        <div class="hidden md:flex mt-auto pb-34 flex-col gap-y-8">
          <div class="h-0.5 w-1/3 bg-dark"></div>
          <p class="first-section-info font-medium">Based in Yerevan. Open&nbsp;for creative&nbsp;collaborations.</p>
        </div>
        <div class="flex flex-col gap-y-6 md:gap-y-12">
          <div class="pl-4 flex flex-col items-start gap-y-4">
            <p class="first-section-text opacity-70 normal-case">
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
import promoSectionImg1 from "@/shared/assets/main/promo-section-1.png";
import promoSectionImg2 from "@/shared/assets/main/promo-section-2.png";
import { DefaultButton } from "@/shared/components/button";
</script>
