<script setup>
import NavLogo from "@/components/nav/NavLogo.vue";
import NavText from "@/components/nav/NavText.vue";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import {onBeforeRouteLeave} from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  // Check if the clicked target is not within the menu
  if (!event.target.closest(".menu-container")) {
    closeMenu();
  }
};

// Watch the isMenuOpen ref and block scrolling when the menu is open
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden"; // Disable scroll
  }else {
    document.body.style.overflow = "auto"; // Enable scroll
  }
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

onBeforeRouteLeave(() => {
  closeMenu();
});
</script>


<template>
  <div class="nav lg:px-20 sm:px-10 px-4">
    <nav class="text-white flex flex-inline justify-between items-center">
      <nav-logo></nav-logo>
      <ul class="flex-row gap-7 lg:flex hidden">
        <li>
          <nav-text text="Accueil" path="/"></nav-text>
        </li>
        <li>
          <nav-text text="Parcours" path="/resume"></nav-text>
        </li>
        <li>
          <nav-text text="Projets" path="/work"></nav-text>
        </li>
        <li>
          <nav-text text="Contact" path="/contact"></nav-text>
        </li>
      </ul>
      <div class="lg:hidden flex justify-center">
        <button class="text-white" @click.stop="toggleMenu()">
          <iconify-icon
              icon="mi:menu"
              class="text-white w-8 h-8"
          ></iconify-icon>
        </button>
      </div>
    </nav>

    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute inset-0 z-40 bg-black/50"></div>
    </transition>
    <transition name="slide">
      <div v-if="isMenuOpen" class="absolute border-l border-neutral-800 z-50 inset-y-0 right-0 w-2/3 sm:w-1/3 bg-background" @click.stop>
        <div class="flex justify-center pt-32">
          <nav-logo class="text-white"></nav-logo>
        </div>
        <ul class="flex flex-col text-white text-2xl gap-7 pt-20 items-center">
          <li>
            <nav-text size="lg" text="Accueil" path="/"></nav-text>
          </li>
          <li>
            <nav-text size="lg" text="Parcours" path="/resume"></nav-text>
          </li>
          <li>
            <nav-text size="lg" text="Projets" path="/work"></nav-text>
          </li>
          <li>
            <nav-text size="lg" text="Contact" path="/contact"></nav-text>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
