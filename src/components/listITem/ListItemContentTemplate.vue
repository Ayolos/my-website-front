<script setup>
</script>

<template>
  <div class="flex flex-col gap-7 w-full h-max">
    <h1 class="text-3xl text-white lg:text-start text-center">
      <slot name="title"></slot>
    </h1>
    <p class="text-gray-400 text-sm lg:text-start text-center">
      <slot name="description"></slot>
    </p>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>

</style>