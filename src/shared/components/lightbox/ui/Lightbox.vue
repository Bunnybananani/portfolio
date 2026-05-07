<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-10 p-4 flex-center bg-black/90"
        @click="emit('close')"
        @keydown.esc="emit('close')"
      >
        <button
          class="absolute top-4 right-4 z-20 text-4xl text-light font-light transition-opacity hover:opacity-70"
          @click.stop="emit('close')"
        >
          ×
        </button>
        <img :src="selectedImage" class="max-h-full max-w-full object-contain" alt="" @click.stop />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  selectedImage: String,
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
