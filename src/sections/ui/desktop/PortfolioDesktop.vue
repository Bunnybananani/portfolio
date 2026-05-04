<template>
  <section class="py-6 xl:py-20 px-4 md:px-6 flex flex-col gap-y-2 md:gap-y-6">
    <h2 class="about-section-title text-center font-bold">PORTFOLIO</h2>
    <div class="grid md:grid-cols-2 gap-4 lg:gap-8">
      <article>
        <p class="section-title italic">
          With 2+ years of experience in SMM and brand content, I help brands and individuals find their unique visual
          voice. I believe in authentic light, cinematic frames, and content that feels real.
        </p>
        <div class="py-6 lg:py-32 2xl:py-62">
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
                <button
                  class="flex flex-col items-start transition-opacity hover:opacity-70"
                  @click="openGallery(GALLERY_TYPES.brands)"
                >
                  <ArrowShortIcon class="h-10 w-10 rotate-180" />
                  <span class="portfolio-section-subtle leading-6">FOR BRANDS</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="flex justify-between items-end">
            <span class="portfolio-section-subtle leading-8">VIDEO</span>
            <p class="section-text w-2/5">
              Capturing movement and atmosphere. Short cinematic reels to complement your visual narrative.
            </p>
          </div>
          <img :src="portraitImg5" alt="" />
        </div>
      </article>
      <article class="flex flex-col-reverse md:flex-col items-center">
        <div class="flex gap-x-4">
          <div class="flex flex-col">
            <img :src="portraitImg1" alt="" />
            <div class="xl:pt-40 grow flex justify-end items-center">
              <button
                class="flex flex-col items-end transition-opacity hover:opacity-70"
                @click="openGallery(GALLERY_TYPES.portraits)"
              >
                <span class="portfolio-section-subtle leading-6">PORTRAITS</span>
                <ArrowWideIcon class="h-10 w-20" />
              </button>
            </div>
          </div>
          <div>
            <img :src="portraitImg2" alt="" />
          </div>
        </div>
        <div class="py-4 md:py-12 lg:py-34 flex gap-x-4">
          <div class="flex flex-col">
            <img :src="portraitImg6" alt="" />
            <div class="grow flex justify-end items-center">
              <button
                class="flex flex-col items-start md:gap-y-2 portfolio-section-subtle leading-6 transition-opacity hover:opacity-70"
                @click="openGallery(GALLERY_TYPES.creative)"
              >
                <span class="">CREATIVE/</span>
                <div class="flex items-center">
                  <span>STUDIO</span>
                  <ArrowWideIcon class="h-10 w-20" />
                </div>
              </button>
            </div>
          </div>
          <div>
            <img :src="portraitImg7" alt="" />
          </div>
        </div>
        <div class="md:pb-10 grow flex justify-center items-center 2xl:items-end">
          <p class="w-3/5 portfolio-section-subtle">
            Aesthetic AND Cinematic Photography. honest visuals for people and&nbsp;brands.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { GALLERY_TYPES } from "@/entities/gallery";
import { ArrowShortIcon, ArrowWideIcon } from "@/shared/components/icon";

import portraitImg1 from "@/shared/assets/main/portrait-1.png";
import portraitImg2 from "@/shared/assets/main/portrait-2.png";
import portraitImg3 from "@/shared/assets/main/portrait-3.png";
import portraitImg4 from "@/shared/assets/main/portrait-4.png";
import portraitImg5 from "@/shared/assets/main/portrait-5.png";
import portraitImg6 from "@/shared/assets/main/portrait-6.png";
import portraitImg7 from "@/shared/assets/main/portrait-7.png";

const router = useRouter();

const openGallery = (galleryType) => {
  router.push({ path: "/gallery", query: { type: galleryType } });
};
</script>
