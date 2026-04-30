<template>
  <footer
    class="px-6 relative h-svh flex flex-col items-center justify-center gap-y-8 md:gap-y-20 bg-no-repeat bg-center bg-cover text-light"
    :style="{ backgroundImage: `url(${footerImg})` }"
  >
    <h3 class="footer-title flex flex-col items-center uppercase text-center text-balance">
      <span>Let’s Collaborate on</span>
      <span>Your Next Big Idea.</span>
    </h3>
    <DefaultButton label="CONTACT NOW" variant="light" />
  </footer>
</template>

<script setup>
import { DefaultButton } from "@/shared/components/button";

import footerImg from "@/shared/assets/main/footer.png";
</script>
