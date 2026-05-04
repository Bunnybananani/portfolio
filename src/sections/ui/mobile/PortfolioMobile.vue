<template>
  <section class="pb-3 px-3 flex-col gap-y-2">
    <h2 class="text-center text-4xl font-semibold uppercase">PORTFOLIO</h2>
    <p class="text-xs font-medium italic uppercase">
      With 2+ years of experience in SMM and brand content, I help brands and individuals find their unique visual
      voice. I believe in authentic light, cinematic frames, and content that feels real.
    </p>
    <div class="flex gap-x-4">
      <div class="flex-3/5 grid grid-cols-2">
        <div></div>
        <div class="flex flex-col gap-y-2">
          <img :src="portraitImg1" alt="" />
          <button class="flex flex-col items-end" @click="openGallery(GALLERY_TYPES.portraits)">
            <span class="text-sm uppercase">PORTRAITS</span>
            <ArrowWideIcon class="h-4 w-8" />
          </button>
        </div>
      </div>
      <div class="flex-2/5">
        <img :src="portraitImg2" alt="" />
      </div>
    </div>
    <div class="w-1/3">
      <p class="text-xxs normal-case opacity-70">
        Crafting a unique visual language that elevates your brand's identity through cinematic light and authentic
        movement.
      </p>
    </div>
    <div class="flex gap-x-2">
      <div class="flex-1/3 flex flex-col gap-y-2">
        <img :src="portraitImg3" alt="" />
      </div>
      <div class="flex-2/3 flex">
        <div class="w-2/5 flex flex-col gap-y-2">
          <img :src="portraitImg4" alt="" />
          <button class="flex flex-col items-start" @click="openGallery(GALLERY_TYPES.brands)">
            <span class="text-sm uppercase text-nowrap">FOR BRANDS</span>
            <ArrowShortIcon class="h-4 w-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-x-1">
      <div class="flex-3/5 flex">
        <div class="flex-2/5"></div>
        <div class="flex-3/5 flex flex-col justify-end gap-y-2">
          <button class="flex flex-col items-end" @click="openGallery(GALLERY_TYPES.creative)">
            <span class="text-sm uppercase">CREATIVE/STUDIO</span>
            <ArrowWideIcon class="h-4 w-8" />
          </button>
          <img :src="portraitImg6" alt="" />
        </div>
      </div>
      <div class="flex-2/5">
        <img :src="portraitImg7" alt="" />
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-sm uppercase">VIDEO</span>
      <div class="flex gap-x-1.5">
        <div class="flex-2/3 space-y-2">
          <img :src="portraitImg5" alt="" />
          <p class="text-xs uppercase">
            Aesthetic AND Cinematic Photography. honest visuals for&nbsp;people and brands.
          </p>
        </div>
        <div class="flex-1/3">
          <p class="text-xxs normal-case opacity-70">
            Capturing movement and atmosphere. Short cinematic reels to complement your visual narrative.
          </p>
        </div>
      </div>
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
