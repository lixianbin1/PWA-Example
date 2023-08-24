<script setup>
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onOfflineReady() {},
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
