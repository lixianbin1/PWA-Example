import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { useRegisterSW } from 'virtual:pwa-register/vue';
import generatedRoutes from '~pages'
import './style.css'
import App from './App.vue'
import '@/assets/rem.js'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

useRegisterSW();
createApp(App).use(router).mount('#app')
