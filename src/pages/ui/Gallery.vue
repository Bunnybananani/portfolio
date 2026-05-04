<template>
  <main class="font-albertsans p-6 min-h-svh space-y-2 bg-light">
    <header class="space-y-4">
      <h1 class="text-2xl font-bold">Gallery</h1>
      <nav class="flex items-center flex-wrap gap-2">
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GELLERY_TYPES.brands" />
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GELLERY_TYPES.portraits" />
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GELLERY_TYPES.video" />
      </nav>
    </header>
    <Transition name="gallery" mode="out-in">
      <MasonryWall
        :key="activeType"
        :items="currentGallery"
        :columnWidth="240"
        :minColumns="2"
        :maxColumns="5"
        :gap="10"
      >
        <template #default="{ item }">
          <div class="cursor-pointer overflow-hidden group">
            <img :src="item.img" class="block w-full transition-transform duration-300 group-hover:scale-105" alt="" />
          </div>
        </template>
      </MasonryWall>
    </Transition>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { MasonryWall } from "@yeger/vue-masonry-wall";
import { GalleryRadio } from "@/shared/components/radio";

import portraitImg1 from "@/shared/assets/main/portrait-1.png";
import portraitImg2 from "@/shared/assets/main/portrait-2.png";
import portraitImg3 from "@/shared/assets/main/portrait-3.png";
import portraitImg4 from "@/shared/assets/main/portrait-4.png";
import portraitImg5 from "@/shared/assets/main/portrait-5.png";
import portraitImg6 from "@/shared/assets/main/portrait-6.png";
import portraitImg7 from "@/shared/assets/main/portrait-7.png";

const GELLERY_TYPES = {
  brands: "Brands",
  portraits: "Portraits",
  video: "Video",
};

const activeType = ref(GELLERY_TYPES.brands);

const currentGallery = computed(() => {
  return {
    [GELLERY_TYPES.brands]: [
      {
        img: portraitImg1,
      },
      {
        img: portraitImg4,
      },
      {
        img: portraitImg2,
      },
      {
        img: portraitImg3,
      },
      {
        img: portraitImg5,
      },
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
      {
        img: portraitImg1,
      },
      {
        img: portraitImg2,
      },
      {
        img: portraitImg3,
      },
      {
        img: portraitImg4,
      },
      {
        img: portraitImg5,
      },
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
    ],
    [GELLERY_TYPES.portraits]: [
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
      {
        img: portraitImg1,
      },
      {
        img: portraitImg2,
      },
      {
        img: portraitImg3,
      },
      {
        img: portraitImg4,
      },
      {
        img: portraitImg5,
      },
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
    ],
    [GELLERY_TYPES.video]: [
      {
        img: portraitImg2,
      },
      {
        img: portraitImg3,
      },
      {
        img: portraitImg4,
      },
      {
        img: portraitImg5,
      },
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
      {
        img: portraitImg3,
      },
      {
        img: portraitImg5,
      },
      {
        img: portraitImg6,
      },
      {
        img: portraitImg7,
      },
      {
        img: portraitImg1,
      },
    ],
  }[activeType.value];
});
</script>

<style scoped>
.gallery-enter-active,
.gallery-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
