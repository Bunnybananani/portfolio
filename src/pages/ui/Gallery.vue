<template>
  <main class="font-albertsans p-6 min-h-svh space-y-2 bg-light">
    <header>
      <h1 class="font-bold">Gallery</h1>
    </header>
    <MasonryWall :items="items" :columnWidth="240" :minColumns="2" :maxColumns="5" :gap="10">
      <template #default="{ item }">
        <div class="cursor-pointer overflow-hidden group">
          <img
            :src="item.img"
            class="block h-full w-full transition-transform group-hover:scale-105 group-active:scale-105"
            alt=""
          />
        </div>
      </template>
    </MasonryWall>
  </main>
</template>

<script setup>
import { MasonryWall } from "@yeger/vue-masonry-wall";

import portraitImg1 from "@/shared/assets/main/portrait-1.png";
import portraitImg2 from "@/shared/assets/main/portrait-2.png";
import portraitImg3 from "@/shared/assets/main/portrait-3.png";
import portraitImg4 from "@/shared/assets/main/portrait-4.png";
import portraitImg5 from "@/shared/assets/main/portrait-5.png";
import portraitImg6 from "@/shared/assets/main/portrait-6.png";
import portraitImg7 from "@/shared/assets/main/portrait-7.png";

const items = [
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
];
</script>
