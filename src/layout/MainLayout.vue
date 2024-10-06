<script setup>

import NavBar from "@/components/nav/NavBar.vue";
</script>

<template>
  <div class="z-0 relative flex flex-col lg:h-screen min-h-screen overflow-clip bg-background lg:px-20 sm:px-10 px-4 pt-5">
    <nav-bar></nav-bar>
    <slot></slot>
  </div>
</template>

<style scoped>
</style>