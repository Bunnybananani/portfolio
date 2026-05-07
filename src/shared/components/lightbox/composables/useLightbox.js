import { onMounted, onUnmounted, ref } from "vue";

export const useLightbox = () => {
  const selectedImage = ref(null);

  const preventScroll = (event) => {
    event.preventDefault();
  };

  const lockScroll = () => {
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
  };

  const unlockScroll = () => {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
  };

  const openLightbox = (img) => {
    selectedImage.value = img;
    lockScroll();
  };

  const closeLightbox = () => {
    selectedImage.value = null;
    unlockScroll();
  };

  const handleEscKeydown = (event) => {
    if (!selectedImage.value) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleEscKeydown);
  });

  onUnmounted(() => {
    unlockScroll();
    window.removeEventListener("keydown", handleEscKeydown);
  });

  return { selectedImage, openLightbox, closeLightbox };
};
