import { useRouter } from "vue-router";

export const useOpenGallery = () => {
  const router = useRouter();

  const openGallery = (galleryType) => {
    router.push({
      path: "/gallery",
      query: {
        type: galleryType,
      },
    });
  };

  return {
    openGallery,
  };
};
