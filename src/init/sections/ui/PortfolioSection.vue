<template>
  <section class="py-6 px-4 md:px-6 flex flex-col gap-y-2 md:gap-y-6">
    <h2 class="about-section-title text-center font-bold">PORTFOLIO</h2>
    <div class="grid md:grid-cols-2 gap-4 lg:gap-8">
      <div>
        <p class="section-title italic">
          With 2+ years of experience in SMM and brand content, I help brands and individuals find their unique visual
          voice. I believe in authentic light, cinematic frames, and content that feels real.
        </p>
        <div class="py-6 md:py-20 lg:py-62">
          <div class="grid grid-cols-2 gap-x-2">
            <div class="pt-28 flex flex-col gap-y-4 md:gap-y-6">
              <img :src="portraitImg3" alt="" />
              <p class="section-text">
                Crafting a unique visual language that elevates your brand's identity through cinematic light and
                authentic movement.
              </p>
            </div>
            <div>
              <img :src="portraitImg4" alt="" />
              <div class="xl:pt-30 grow flex justify-start items-center">
                <button class="flex flex-col items-start">
                  <ArrowShortIcon class="h-10 w-10 rotate-180" />
                  <span class="portfolio-section-subtle leading-6">FOR BRANDS</span>
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex gap-x-4">
          <div class="flex flex-col">
            <img :src="portraitImg1" alt="" />
            <div class="xl:pt-40 grow flex justify-end items-center">
              <button class="flex flex-col items-end">
                <span class="portfolio-section-subtle leading-6">PORTRAITS</span>
                <ArrowWideIcon class="h-10 w-20" />
              </button>
            </div>
          </div>
          <div>
            <img :src="portraitImg2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowShortIcon, ArrowWideIcon } from "@/shared/components/icon";

import portraitImg1 from "@/shared/assets/main/portrait-1.png";
import portraitImg2 from "@/shared/assets/main/portrait-2.png";
import portraitImg3 from "@/shared/assets/main/portrait-3.png";
import portraitImg4 from "@/shared/assets/main/portrait-4.png";
</script>
