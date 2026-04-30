<template>
  <button
    class=""
    :class="['text-xl font-medium transition-opacity hover:opacity-70 active:opacity-70', btnTheme, btnSize]"
  >
    {{ label }}
  </button>
</template>

<script setup>
const { variant, size } = defineProps({
  label: String,
  variant: { type: String, default: "dark" },
  size: { type: String, default: "default" },
});

const btnTheme = {
  dark: "bg-dark text-light",
  light: "bg-light text-dark",
}[variant];

const btnSize = {
  dark: "py-3.5 px-10.5",
  light: "py-3.5 px-10.5 md:py-6 md:px-16",
}[variant];
</script>
