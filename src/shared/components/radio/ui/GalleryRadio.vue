<template>
  <label class="cursor-pointer">
    <input v-model="model" type="radio" class="sr-only peer" :name="name" :value="value" />
    <div
      class="py-2 px-3 flex-center gap-2 rounded-2xl bg-yellow-200/60 font-semibold transition-colors peer-checked:bg-yellow-300"
    >
      {{ value }}
    </div>
  </label>
</template>

<script setup>
defineProps({ name: String, value: String });

const model = defineModel();
</script>
