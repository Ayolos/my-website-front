<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from "@/layout/MainLayout.vue";
import Antoine from "@/assets/antoine.png";
import KPIText from "@/components/KPIText.vue";
import IconButton from "@/components/IconButton.vue";
import { gsap } from 'gsap';
import GradientButton from "@/components/GradientButton.vue";

// Image state
const imageLoaded = ref(false);

// SVG circle ref
const circleRef = ref(null);

// Function to handle image load event
const handleImageLoad = () => {
  imageLoaded.value = true;
};

// GSAP animation functions
const animateCircle = (element) => {
  gsap.to(element, {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    duration: 11,
    ease: "linear",
  });

  gsap.to(element.querySelector('.neon-circle'), {
    strokeDasharray: [
      "15, 120, 25, 25",
      "16, 25, 92, 72",
      "4, 250, 22, 22",
    ],
    strokeDashoffset: 100,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    keyframes: [
      { strokeDasharray: "15, 120, 25, 25", duration: 2 },
      { strokeDasharray: "16, 25, 92, 72", duration: 5 },
      { strokeDasharray: "4, 250, 22, 22", duration: 5 },
    ]
  });
};

// Trigger animations when component is mounted
onMounted(() => {
  if (circleRef.value) {
    animateCircle(circleRef.value);
  }
});
</script>

<template>
  <main-layout>
    <div class="flex flex-col justify-between py-20 lg:gap-18 lg:px-20 sm:px-10 px-4 gap-10 h-full">
      <div class="flex lg:flex-row flex-col-reverse justify-between lg:gap-16 gap-10 items-center h-full">
        <div class="basis-3/5">
          <div class="flex flex-col items-center lg:items-start h-full gap-2">
            <h3 class="text-gray-300">Développeur</h3>
            <div>
              <h1 class="lg:text-6xl text-5xl lg:text-start text-center text-white font-dis">Hello je suis</h1>
              <h1 class="lg:text-6xl text-5xl lg:text-start text-center font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Antoine André
              </h1>
            </div>
            <p class="pt-5 text-sm lg:text-start text-center text-gray-400 leading-loose">
              Bienvenue sur mon portfolio ! Passionné par le développement web fullstack,
              je mets mes compétences au service de projets innovants et stimulants.
            </p>
            <div class="flex lg:flex-row flex-col gap-8 items-center w-full h-full pt-6">
              <gradient-button type-component="a" bg-color="bg-background" border-size="0.5" href="/cv_antoine_andre.pdf" download="cv_antoine_andre.pdf" rounded="full">
                Télécharger le CV
                <iconify-icon icon="material-symbols:download" class="text-xl text-pink-500"></iconify-icon>
              </gradient-button>
              <div class="flex flex-row gap-8">
                <icon-button icon="bx:bxl-github"
                             href="https://github.com/Ayolos"></icon-button>
                <icon-button icon="bx:bxl-linkedin"
                             href="https://www.linkedin.com/in/antoine-andre-465121196/"></icon-button>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-2/5">
          <div class="relative">
            <img
                v-show="imageLoaded"
                :src="Antoine"
                alt="Antoine"
                @load="handleImageLoad"
                class="max-w-[300px] lg:min-w-[400px] lg:max-w-[450px] lg:w-full aspect-square rounded-full bg-cover p-1 mix-blend-lighten"/>
            <div
                v-show="!imageLoaded"
                class="flex items-center justify-center p-1 aspect-square max-w-[300px] lg:min-w-[400px] lg:max-w-[450px] lg:w-full rounded-full bg-cover bg-background-light">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <svg ref="circleRef" class="absolute inset-0 max-w-[300px] lg:min-w-[400px] lg:max-w-[450px] lg:w-full h-full overflow-visible">
              <circle
                  class="neon-circle"
                  cx="50%"
                  cy="50%"
                  fill="none"
                  r="49%"
                  stroke="#ec4899"
                  stroke-dasharray="15, 120, 25, 25"
                  stroke-linecap="round"
                  stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="p-0.5 rounded-3xl shadow-2xl rotate-gradient-border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 bg-background/90 justify-between items-center px-12 py-14 rounded-3xl">
          <k-p-i-text number="5" text="Années d'expérience"></k-p-i-text>
          <k-p-i-text number="6" text="Projets complétés"></k-p-i-text>
          <k-p-i-text number="9" text="Technologies maîtrisées"></k-p-i-text>
          <k-p-i-text number="5" text="Années d'études"></k-p-i-text>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<style scoped>
.neon-circle {
  filter: drop-shadow(0 0 5px #ec4899);

}

@keyframes rotate {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.rotate-gradient-border {
  animation: rotate 5s ease infinite;
  background-size: 200% 200%;
}
</style>
