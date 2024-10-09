<template>
  <main-layout>
    <div class="flex-col items-center py-20 lg:py-24 h-max w-full lg:px-20 sm:px-10 px-4 flex gap-10">
      <div class="flex flex-col gap-4 text-center sm:w-2/3 w-full">
        <h1 class="text-4xl text-white">Contact</h1>
        <p class="text-gray-500 text-sm">Si vous êtes intéressé par mon profil et souhaitez discuter d'opportunités de
          collaboration, n'hésitez pas à me contacter. Je serais ravi d'échanger avec vous sur mes compétences, mes
          projets et mes passions. Vous pouvez me joindre par email ou via mes réseaux sociaux ci-dessous.</p>
      </div>
      <div class="flex lg:flex-row flex-col-reverse h-full xl:w-3/4 w-full">
        <div class="bg-background-light w-full basis-3/5 h-full p-8 lg:rounded-l-xl max-lg:rounded-b-xl shadow-2xl">
          <form @submit.prevent="envoyerMail">
            <div class="flex flex-col gap-4">
              <div class="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                <InputForm v-model="nom" type="input" value="nom">
                  Nom
                </InputForm>
                <InputForm v-model="prenom" type="input" value="prenom">
                  Prénom
                </InputForm>
              </div>
              <InputForm v-model="email" type="input" value="email">
                Adresse mail
              </InputForm>
              <InputForm v-model="message" type="textarea" value="message">
                Message
              </InputForm>
            </div>
            <div class="flex flex-row gap-4 h-full items-center pt-4">
              <gradient-button type-component="button" bg-color="bg-background-light" rounded="lg">
                Envoyer
              </gradient-button>
              <iconify-icon v-if="isMailLoading" class="text-3xl text-pink-500" icon="eos-icons:bubble-loading"></iconify-icon>
              <icon-style v-else-if="!isMailLoading && isMailSent" padding="2">
                <iconify-icon class="h-7 w-7 text-green-500" icon="line-md:email-check-twotone"></iconify-icon>
              </icon-style>
              <icon-style v-else-if="!isMailLoading && isMailError" padding="2">
                <iconify-icon class="h-7 w-7 text-red-500" icon="line-md:email-remove-twotone"></iconify-icon>
              </icon-style>
            </div>
          </form>
        </div>
        <div class="z-0 p-10 overflow-hidden basis-2/5 lg:rounded-r-xl max-lg:rounded-t-xl shadow-2xl relative bg-background-light max-sm:grid-cols-1 grid grid-cols-2 lg:grid-cols-1 justify-center items-center gap-8">
          <div class="-z-50 absolute left-20 top-0 h-20 w-56 bg-blue-500 blur-3xl"></div>
          <div class="-z-50 absolute left-0 bottom-0 h-32 w-[70%] bg-purple-500 blur-3xl"></div>
          <div class="-z-50 absolute right-0 top-1/2 h-48 w-20 bg-pink-500 blur-3xl"></div>
          <div class="-z-40 absolute inset-0 bg-background-light/60 backdrop-blur"></div>
          <icon-text icon="ic:twotone-phone">
            <template #label>
              Téléphone
            </template>
            <template #content>
              07 78 19 27 97
            </template>
          </icon-text>
          <icon-text icon="ic:twotone-email">
            <template #label>
              Email
            </template>
            <template #content>
              ayolos14@gmail.com
            </template>
          </icon-text>
          <icon-text icon="ic:twotone-place">
            <template #label>
              Lieu
            </template>
            <template #content>
              Lille
            </template>
          </icon-text>
          <icon-text icon="mdi:linkedin">
            <template #label>
              Linkedin
            </template>
            <template #content>
              <a href="https://www.linkedin.com/in/antoine-andre-465121196/" class="hover:text-pink-500">Antoine ANDRE</a>
            </template>
          </icon-text>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import MainLayout from "@/layout/MainLayout.vue";
import InputForm from "@/components/form/InputForm.vue";
import GradientButton from "@/components/GradientButton.vue";
import IconStyle from "@/components/IconStyle.vue";
import IconText from "@/components/IconText.vue";

// Define form fields and status
const nom = ref('');
const prenom = ref('');
const email = ref('');
const message = ref('');
const isMailLoading = ref(false);
const isMailSent = ref(false);
const isMailError = ref(false);

const showTemporaryStatus = (statusRef, duration = 3000) => {
  statusRef.value = true;
  setTimeout(() => {
    statusRef.value = false;
  }, duration);
};

// Function to send the form data
const envoyerMail = () => {
  isMailLoading.value = true;
  axios.post('https://my-website-back.vercel.app/envoyer-mail', {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    message: message.value
  })
      .then(() => {
        nom.value = '';
        email.value = '';
        message.value = '';
        prenom.value = '';
        isMailLoading.value = false;
        isMailSent.value = true;
        showTemporaryStatus(isMailSent);
      })
      .catch(() => {
        isMailLoading.value = false;
        isMailError.value = true;
        showTemporaryStatus(isMailError);
      });
};
</script>
