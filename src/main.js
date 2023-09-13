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
  //自动重载
  immediate: true,

  //脱机离线
  onOfflineReady:(e)=>{
    console.log(e,'脱机离线')
  },

  //更新服务
  onNeedRefresh:(e)=>{
    console.log(e,'更新服务')
  },

  //注册服务
  onRegistered:(e)=>{
    console.log(e,'注册服务')
  },
})
createApp(App).use(router).mount('#app')