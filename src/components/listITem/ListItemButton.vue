<script setup>
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['click']);

const props = defineProps({
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <button @click="emits('click')"
          class="w-full shadow-xl py-2 rounded-md transition duration-500 ease-in-out outline outline-none hover:scale-105 hover:outline-pink-500"
          :class="props.active ? 'bg-pink-500' : 'bg-background-light text-white ring-1 ring-neutral-700'"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>