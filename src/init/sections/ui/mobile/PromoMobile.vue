<template>
  <section class="pt-4 px-3 space-y-2">
    <h2 class="text-sm font-medium italic">
      SPECIALIZING IN FASHION AND PORTRAIT PHOTOGRAPHY, I&nbsp;BRING&nbsp;2+&nbsp;YEARS&nbsp;OF&nbsp;EXPERIENCE WORKING
      WITH CLOTHING&nbsp;BRANDS.
    </h2>
    <div class="grid grid-cols-2">
      <img class="w-5/6" :src="promoSectionImg1" alt="" />
      <div class="pt-4 flex flex-col gap-y-8">
        <div class="pr-6 flex justify-start">
          <p class="pt-1 border-t text-xxs font-medium">Based in Yerevan. Open for creative collaborations.</p>
        </div>
        <div class="pl-6 space-y-2">
          <p class="text-xxs normal-case opacity-70">
            Photography is how I capture the beauty of the world around us. I’m just here to share that vision through
            my lens. Let’s create something together
          </p>
          <DefaultButton label="Get Started" size="mobileDark" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="pl-4 place-self-center text-sm">
        <p>BEAUTY IS IN THE EYE OF&nbsp;THE BEHOLDER</p>
      </div>
      <img class="place-self-end w-5/6" :src="promoSectionImg2" alt="" />
    </div>
  </section>
</template>

<script setup>
import { DefaultButton } from "@/shared/components/button";

import promoSectionImg1 from "@/shared/assets/main/promo-section-1.png";
import promoSectionImg2 from "@/shared/assets/main/promo-section-2.png";
</script>
