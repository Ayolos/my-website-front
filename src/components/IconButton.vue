<script setup>
import { defineProps } from 'vue';
import {Icon as IconifyIcon} from "@iconify/vue";

const props = defineProps(
    {
      href: {
        type: String,
        required: false,
      },
      icon: {
        type: String,
        required: true,
      }
    }
);
</script>

<template>
  <a :href="props.href" class="flex items-center justify-center rounded-full text-item border border-pink-500 text-pink-500 aspect-square p-2 transition transform duration-700 ease-in-out hover:scale-125 hover:text-background hover:bg-pink-500">
    <iconify-icon :icon="props.icon" class="text-2xl"></iconify-icon>
  </a>
</template>

<style scoped>

</style>