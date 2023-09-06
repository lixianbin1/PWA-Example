import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { registerSW } from 'virtual:pwa-register'
import generatedRoutes from '~pages'
import './style.css'
import App from './App.vue'
import '@/assets/rem.js'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

registerSW({ 
  immediate: true,
  onOfflineReady() {
  },
})
createApp(App).use(router).mount('#app')