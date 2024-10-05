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
    title: "Frontend Website",
    description: "Dans le cadre de ce second projet, j'ai développé un site web vitrine pour une entreprise du bâtiment. Comme pour Northbotanica, j'ai consolidé mes compétences en Vue.js et géré l'hébergement via CloudPanel. Cependant, ce projet m'a également permis d'implémenter un système de messagerie en utilisant Mailcow, facilitant ainsi la communication entre l'entreprise et ses clients. J'ai également optimisé le site pour le référencement avec Google Search Console.",
    badges: ["VueJS", "Laravel", "InertiaJS"],
    githubLink: "https://github.com/Ayolos/SiteProBatiment.git",
    bgColor: "bg-purple-500"
  },
  {
    cardIndex: 3,
    title: "Laravel Nova TMS",
    description: "Lors de mon stage, j'ai eu l'opportunité de développer de A à Z un projet de TMS, en utilisant Laravel Nova. Ce système permet de suivre les différentes commandes de transport, de gérer la facturation, ainsi que la gestion des salariés et des clients. J'ai amélioré mes compétences avec les outils Laravel et appris à définir les besoins d'un client en rédigeant un cahier des charges détaillé, ce qui a contribué à la réussite du projet. (par soucis de confidentialité, le code n'est pas disponible en public sur Github)",
    badges: ["VueJS", "Laravel", "Laravel nova"],
    bgColor: "bg-pink-500"
  },
];
</script>

<template>
<main-layout>
<div class="lg:py-32 py-20 w-full h-full">
  <div class="flex flex-wrap justify-center gap-4 w-full h-full">
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
</style>