
<template>
<!--  <transition @before-enter="beforeEnter">
    <router-view />
  </transition>-->
  <router-view></router-view>

  <div class="fixed inset-0 grid grid-cols-5 z-50" v-if="isTransitioning">
    <div v-for="tile in tiles" :key="tile" class="tile bg-neutral-300 h-full w-full"></div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, nextTick } from "vue";

const isTransitioning = ref(false);
const tiles = ref(Array.from({ length: 5 }, (_, i) => i));

const beforeEnter = async (el) => {
  isTransitioning.value = true;
  gsap.set(el, { opacity: 0 });

  await nextTick(); // S'assurer que les tuiles sont rendues

  const tilesElements = document.querySelectorAll('.tile');

  // Descente des tuiles (gauche vers droite)
  gsap.set(tilesElements, { y: '-100%', x: '0%' }); // Commencer hors de l'écran à gauche
  gsap.to(tilesElements, {
    y: '0%',
    x: '0%',
    stagger: {
      amount: 0.6,
      from: "start" // Animer de gauche à droite
    },
    duration: 0.4,
    ease: 'power1.inOut',
    onComplete: () => {
      // Après la descente, montée des tuiles (droite vers gauche)
      gsap.to(tilesElements, {
        y: '100%', // Sortir de l'écran vers le bas
        x: '0%', // Garder la position x
        stagger: {
          amount: 0.6,
          from: "end" // Animer de droite à gauche
        },
        duration: 0.4,
        ease: 'power1.inOut',
        onComplete: () => {
          // Une fois l'animation terminée, afficher la nouvelle page
          gsap.to(el, {
            opacity: 1,
            duration: 0.4,
            ease: 'power1.inOut',
            onComplete: () => {
              isTransitioning.value = false; // Terminer la transition
            }
          });
        }
      });
    }
  });
};

</script>
