<template>
  <div class="ul">
    <router-link class="li" :to="{ path: '/Kailuo',}">
      开罗
    </router-link>
    <router-link class="li" :to="{ path: '/Qiutu',}">
      囚徒健身
    </router-link>
  </div>
</template>

<style scoped>
.ul{
  display: inline-flex;
  justify-content: stretch;
  flex-wrap: wrap;
}
.li{
  font-size: 0.3rem;
  width: 2rem;
  height: 1rem;
  border-radius: 0.1rem;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  margin: 0.1rem;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
