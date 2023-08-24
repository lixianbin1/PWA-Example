<script setup lang="ts">
import Header_0821 from '../../../components/Header_0821.vue';

const router = useRouter()

const toDetail=(item)=>{
  router.push({path:`/Kailuo/0821/${item.id}`})
}
</script>

<template>
  <Header_0821/>
  <div class="box">
    <p class="id">ID</p>
    <p>名称</p>
    <p>技能</p>
    <p class="shape">体型</p>
    <p class="attribute">属性</p>
  </div>
  <div class="box_list">
    <div class="box" v-for="item in Kailuo_0821" @click="toDetail(item)">
      <p class="id">{{item.id}}</p>
      <p>{{item.name}}</p>
      <p>{{item.skill?item.skill:'无'}}</p>
      <p class="shape">{{item.shape}}</p>
      <p class="attribute">{{item.attribute?item.attribute:'无'}}</p>
    </div>
  </div>
</template>

<style>
.box_list{
  height: calc(100vh - 1.7rem - 2px);
  overflow: auto;
  text-align: center;
  font-size: 0;
}
.box{
  width: calc(100% - 0.1rem);
  height: 0.5rem;
  font-size: 0.2rem;
  border-top: 1px solid #ccc;
  vertical-align: bottom;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  flex-direction: row;
  padding: 0.05rem;
}
.box p{
  flex:1;
  text-align: left;
}
.box .id,.box .shape,.box .attribute{
  width: 0.5rem;
  flex: inherit;
  flex-shrink: 0;
}
.box .shape,.box .attribute{
  width: 1rem;
  text-align: center;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
