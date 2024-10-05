<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: false,
  }
})

</script>

<template>
  <div class="flex flex-col gap-3 bg-background-light shadow-xl border border-neutral-700 rounded-md p-5">
    <p class="text-pink-500 text-xs">
      <slot name="date"></slot>
    </p>
    <h2 class="text-white text-sm">
      <slot name="title"></slot>
    </h2>
    <ul v-if="props.type === 'list'" class="list-disc list-outside pl-3.5 text-gray-500  text-sm marker:text-pink-500">
      <slot name="lists"></slot>
    </ul>
    <p v-else class="text-gray-500 text-sm">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style scoped>

</style>