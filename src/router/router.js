import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/HomePage.vue';
import Resume from '../pages/ResumePage.vue';
import Work from '../pages/WorkPage.vue';
import Contact from '../pages/ContactPage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;