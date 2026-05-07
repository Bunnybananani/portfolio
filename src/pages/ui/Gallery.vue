<template>
  <main class="font-albertsans p-2 md:p-6 min-h-svh space-y-2 bg-light">
    <header class="space-y-4">
      <button class="flex items-center gap-x-2 transition-opacity hover:opacity-70" @click="router.push('/')">
        <ArrowShortIcon class="h-10 w-10 rotate-180" />
        <h1 class="text-2xl font-bold">Gallery</h1>
      </button>
      <nav class="flex items-center flex-wrap gap-2">
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GALLERY_TYPES.brands" />
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GALLERY_TYPES.portraits" />
        <GalleryRadio v-model="activeType" name="gallery-type" :value="GALLERY_TYPES.creative" />
      </nav>
    </header>
    <Transition name="gallery" mode="out-in">
      <MasonryWall
        :key="activeType"
        :items="currentGallery"
        :columnWidth="240"
        :minColumns="2"
        :maxColumns="5"
        :gap="8"
      >
        <template #default="{ item }">
          <div class="cursor-pointer overflow-hidden group" @click="openLightbox(item.img)">
            <img
              :src="item.img"
              :loading="item.priority ? 'eager' : 'lazy'"
              :fetchpriority="item.priority ? 'high' : 'auto'"
              decoding="async"
              class="gallery-image block w-full opacity-0 transition-all duration-300 group-hover:scale-105"
              alt=""
              @load="$event.target.classList.add('is-loaded')"
            />
          </div>
        </template>
      </MasonryWall>
    </Transition>
  </main>
  <Lightbox :selectedImage="selectedImage" @close="closeLightbox" />
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { MasonryWall } from "@yeger/vue-masonry-wall";
import { Lightbox, useLightbox } from "@/shared/components/lightbox";
import { GALLERY_TYPES } from "@/entities/gallery";
import { GalleryRadio } from "@/shared/components/radio";
import { shuffle } from "@/shared/libs";
import { ArrowShortIcon } from "@/shared/components/icon";

const makeGallery = (modules) =>
  shuffle(Object.values(modules)).map((img, index) => ({
    img,
    priority: index < 10,
  }));

const brandImages = makeGallery(
  import.meta.glob("@/shared/assets/brands/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const portraitImages = makeGallery(
  import.meta.glob("@/shared/assets/portraits/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const creativeImages = makeGallery(
  import.meta.glob("@/shared/assets/creative/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const router = useRouter();
const route = useRoute();

const { selectedImage, openLightbox, closeLightbox } = useLightbox();

const activeType = ref(route.query.type || GALLERY_TYPES.brands);

const currentGallery = computed(() => {
  return {
    [GALLERY_TYPES.brands]: brandImages,
    [GALLERY_TYPES.portraits]: portraitImages,
    [GALLERY_TYPES.creative]: creativeImages,
  }[activeType.value];
});

watch(activeType, (type) => {
  router.replace({
    query: {
      ...route.query,
      type,
    },
  });
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
  transform: translateY(1rem);
}

.gallery-image.is-loaded {
  opacity: 1;
}
</style>
