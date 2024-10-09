<script setup>
import { ref } from 'vue';
import MainLayout from "@/layout/MainLayout.vue";
import ProjectCard from "@/components/slider/ProjectCard.vue";

// Suivi de la carte développée
const expandedCard = ref(1);

const toggleExpand = (cardIndex) => {
  expandedCard.value = expandedCard.value === cardIndex ? null : cardIndex;
};

// Liste des projets
const projects = [
  {
    cardIndex: 1,
    title: "NorthBotanica",
    description: "J'ai réalisé un site web vitrine pour promouvoir les services de Northbotanica, ce qui m'a permis de renforcer mes compétences en Vue.js. J'ai également appris à installer un serveur via CloudPanel, à configurer et à mettre en production le site. En utilisant Google Search Console, j'ai optimisé le référencement pour améliorer la visibilité en ligne.",
    badges: ["VueJS", "Laravel", "InertiaJS"],
    githubLink: "https://github.com/Ayolos/NorthBotanica.git",
    bgColor: "bg-blue-500"
  },
  {
    cardIndex: 2,
    title: "NEF Bâtiment",
    description: "Dans le cadre de ce second projet, j'ai développé un site web vitrine pour une entreprise du bâtiment. J'ai consolidé mes compétences en Vue.js et géré l'hébergement via CloudPanel. Cependant, ce projet m'a également permis d'implémenter un système de messagerie en utilisant Mailcow, facilitant ainsi la communication entre l'entreprise et ses clients. J'ai également optimisé le site pour le référencement avec Google Search Console.",
    badges: ["VueJS", "Laravel", "InertiaJS"],
    githubLink: "https://github.com/Ayolos/SiteProBatiment.git",
    bgColor: "bg-purple-500"
  },
  {
    cardIndex: 3,
    title: "Symphony App",
    description: "Dans le cadre de mon projet de fin d'études en master, j'ai développé Symphony, un réseau social centré sur la musique, conçu avec le framework Laravel. Ce réseau permet aux utilisateurs de partager des posts, de commenter, de liker et de recevoir des notifications, tout en offrant une gestion complète des profils utilisateurs. Un système d'authentification robuste est également mis en place, comprenant l'inscription, la connexion, et la réinitialisation de mot de passe.",
    badges: ["VueJS", "Laravel", "InertiaJS"],
    githubLink: "https://github.com/Ayolos/SymphonyApp.git",
    bgColor: "bg-blue-500"
  },
  {
    cardIndex: 4,
    title: "Laravel Nova TMS",
    description: "Lors de mon stage, j'ai eu l'opportunité de développer de A à Z un projet de TMS, en utilisant Laravel Nova. Ce système permet de suivre les différentes commandes de transport, de gérer la facturation, ainsi que la gestion des salariés et des clients. J'ai amélioré mes compétences avec les outils Laravel et appris à définir les besoins d'un client en rédigeant un cahier des charges détaillé, ce qui a contribué à la réussite du projet. (par soucis de confidentialité, le code n'est pas disponible en public sur Github)",
    badges: ["VueJS", "Laravel", "Laravel nova"],
    bgColor: "bg-pink-500"
  },
];
</script>

<template>
  <main-layout>
    <div class="lg:pt-24 pt-20 pb-10 w-full h-full flex flex-col gap-10 items-center lg:px-10 sm:px-10 px-4">
      <div class="flex flex-col gap-4 text-center sm:w-2/3 w-full">
        <h1 class="text-4xl text-white">Mes projets</h1>
        <p class="text-gray-500 text-sm">Découvrez une sélection de mes réalisations, où je mets en avant mes compétences en développement web. Chaque projet illustre ma créativité et mon souci du détail dans la conception de solutions uniques.</p>
      </div>

      <!-- Ajout de scrollable en x avec overflow-x-auto -->
      <div class="flex flex-wrap lg:flex-nowrap justify-start gap-4 w-full h-full lg:overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide">
        <!-- Assurez-vous que les cartes ne se plient pas avec flex-nowrap -->
        <ProjectCard
            v-for="project in projects"
            :key="project.cardIndex"
            :cardIndex="project.cardIndex"
            :expandedCard="expandedCard"
            :toggleExpand="toggleExpand"
            :title="project.title"
            :description="project.description"
            :badges="project.badges"
            :githubLink="project.githubLink"
            :bgColor="project.bgColor"
            class="snap-center snap-always"
        />
      </div>
    </div>
  </main-layout>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

/* Ajouter cette classe à votre fichier CSS */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari et Opera */
}
</style>