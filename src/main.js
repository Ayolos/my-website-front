import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router/router'
import { Icon } from '@iconify/vue';


const app = createApp(App)
app.use(router)
app.component('iconify-icon', Icon)
app.mount('#app')