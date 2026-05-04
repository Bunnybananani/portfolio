<template>
  <footer
    class="py-12 relative items-center justify-center bg-no-repeat bg-center bg-cover text-light"
    :style="{ backgroundImage: `url(${footerImg})` }"
  >
    <div class="flex flex-col items-center gap-y-2">
      <h3 class="flex flex-col items-center uppercase text-center text-balance">
        <span>Let’s Collaborate on</span>
        <span>Your Next Big Idea.</span>
      </h3>
      <DefaultButton label="CONTACT NOW" variant="light" size="wideSmall" />
    </div>
  </footer>
</template>

<script setup>
import { DefaultButton } from "@/shared/components/button";

import footerImg from "@/shared/assets/main/footer.png";
</script>
