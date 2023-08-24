<script setup lang="ts">
const list = reactive({

})
console.log(list)
</script>

<template>
  <div class="ul">
    <div class="li">
      <router-link :to="{ path: '/Kailuo',}">
        开罗
      </router-link>
    </div>
  </div>
</template>
.box_list{

}
<style>
.li{
  font-size: 0.3rem;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
