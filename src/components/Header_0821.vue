<script setup>
const router = useRouter()
const toBack=()=>{
  router.back()
}
</script>

<template>
  <div class="title">
    <span class="back" @click="toBack">返回</span>
    <slot></slot>
  </div>
</template>

<style scoped>
.title{
  font-size: 0.2rem;
  text-align: center;
  padding: 0.1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.back{
  position: absolute;
  left: 0.3rem;
  font-size: 0.15rem;
}
</style>
