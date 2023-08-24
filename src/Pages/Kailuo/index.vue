<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const toBack=()=>{
  let path=''
  const paths = route.path.split('/')
  paths.pop()
  if(paths.length>1){
    path = paths.join('/')
  }else{
    path='/'
  }
  router.replace({path})
}
</script>

<template>
  <div class="ul">
    <div class="header">
      <span class="back" @click="toBack">返回</span>
    </div>
    <div class="li">
      <router-link :to="{ path: '/Kailuo/0821',}">
        大航海探险物语宠物图鉴
      </router-link>
    </div>
    <div class="li">
      <router-link :to="{ path: '/Kailuo/0821/computed',}">
        大航海探险物语宠物孵化计算器
      </router-link>
    </div>
  </div>
</template>
.box_list{

}
<style>
.li{
  font-size: 0.3rem;
  padding:0.2rem 0.5rem
}
.header{
  font-size: 0.15rem;
  padding: 0.1rem 0.2rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.back{
  font-weight: 600;
  letter-spacing: 0.05rem;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
