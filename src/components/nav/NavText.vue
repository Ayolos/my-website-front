<script setup>
import {computed, defineProps} from 'vue';

const props = defineProps(
    {
        text: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'sm'
        }
    }
);

const sizeClass = computed(() => {
    if (props.size === 'sm') {
        return 'text-sm';
    } else if (props.size === 'md') {
        return 'text-md';
    } else if (props.size === 'lg') {
        return 'text-lg';
    }else {
        return 'text-sm';
    }
});
</script>

<template>
  <router-link
      active-class="pb-1 border-b-2 border-pink-500 text-pink-500"
      :to="props.path"
      :class="sizeClass"
      class="hover:text-pink-500"
  >{{ props.text }}</router-link>
</template>

<style scoped>

</style>