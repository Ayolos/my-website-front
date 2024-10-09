<script setup>

import NavBar from "@/components/nav/NavBar.vue";
</script>

<template>
  <div class="z-0 relative flex flex-col lg:h-screen min-h-screen bg-background">
    <nav-bar></nav-bar>
    <div class="h-full flex mt-[76px]">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>