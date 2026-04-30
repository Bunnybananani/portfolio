<template>
  <section class="py-4 md:py-12 px-4 md:px-6">
    <div class="flex gap-3">
      <div class="flex-1/3 flex flex-col items-end">
        <div class="md:w-3/4 aspect-440/320 overflow-hidden">
          <Transition name="slide-fade" mode="out-in">
            <img class="h-full w-full object-cover" :key="nextSlide.image" :src="nextSlide.image" alt="" />
          </Transition>
        </div>
        <div class="flex items-end grow">
          <div class="grid">
            <div class="flex items-center gap-x-4">
              <button class="transition-opacity hover:opacity-70 active:opacity-70" @click="prevClick">
                <ArrowShortIcon class="h-10 w-10 rotate-180" />
              </button>
              <button class="transition-opacity hover:opacity-70 active:opacity-70" @click="nextClick">
                <ArrowWideIcon class="h-10 w-20" />
              </button>
            </div>
            <div class="place-self-center font-medium">
              <p class="w-20 text-3xl">{{ currentNumber }} <span class="text-xl">/</span></p>
              <p class="text-xl">{{ totalNumber }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-2/3 aspect-1280/520 overflow-hidden">
        <Transition name="slide-fade" mode="out-in">
          <img class="h-full w-full object-cover" :key="activeSlide.image" :src="activeSlide.image" alt="" />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { ArrowShortIcon, ArrowWideIcon } from "@/shared/components/icon";

import sliderImg1 from "@/shared/assets/slider/slide-1.png";
import sliderImg2 from "@/shared/assets/slider/slide-2.png";
import sliderImg3 from "@/shared/assets/slider/slide-3.png";

const SLIDES = [
  {
    image: sliderImg1,
  },

  {
    image: sliderImg2,
  },
  {
    image: sliderImg3,
  },
];

const activeIndex = ref(0);

const activeSlide = computed(() => SLIDES[activeIndex.value]);
const nextSlide = computed(() => {
  const nextIndex = activeIndex.value + 1;

  return SLIDES[nextIndex] ?? SLIDES[0];
});

const currentNumber = computed(() => String(activeIndex.value + 1).padStart(2, "0"));
const totalNumber = computed(() => String(SLIDES.length).padStart(2, "0"));

const nextClick = () => {
  activeIndex.value = activeIndex.value + 1 >= SLIDES.length ? 0 : activeIndex.value + 1;
};

const prevClick = () => {
  activeIndex.value = activeIndex.value - 1 < 0 ? SLIDES.length - 1 : activeIndex.value - 1;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.2s ease-in,
    transform 0.2s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(1.5rem) scale(1.02);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-1.5rem) scale(0.98);
}
</style>
