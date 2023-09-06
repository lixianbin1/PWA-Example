<template>
  <div class="ul">
    <Header_0821/>
    <div class="li">
      <router-link :to="{ path: '/Kailuo/0821',}">
        大航海探险物语宠物图鉴
      </router-link>
    </div>
    <div class="li">
      <router-link :to="{ path: '/Kailuo/0901',}">
        大航海探险物语宠物孵化计算器
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.li{
  font-size: 0.3rem;
  padding:0.2rem 0.5rem
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
