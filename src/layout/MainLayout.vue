<script setup>

import NavBar from "@/components/nav/NavBar.vue";
</script>

<template>
  <div class="relative w-full flex flex-col h-full min-h-screen bg-background">
    <nav-bar></nav-bar>
    <div class="h-full flex-grow flex">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>