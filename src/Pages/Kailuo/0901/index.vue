<script setup lang="ts">

const router = useRouter()

const toDetail=(item)=>{
  router.push({path:`/Kailuo/0821/${item.id}`})
}

const green = ref()
const red = ref()
const blue = ref()
const purple = ref()
const yello = ref()
const black = ref()

const FilterArr = reactive({
  value:Kailuo_0821
})

const toComputed = ()=>{
  let Gre = green.value
  let Red = red.value
  let Blu = blue.value
  let Pur = purple.value
  let Yel = yello.value
  let Bla = black.value
  let Filter=Kailuo_0821
  if(Gre){
    Filter = Filter.filter((word)=>{
      if(word.min_green <= Gre && word.max_green >= Gre){
        return true
      }
      return false
    })
  }
  if(Red){
    Filter = Filter.filter((word)=>{
      if(word.min_red <= Red && word.max_red >= Red){
        return true
      }
      return false
    })
  }
  if(Blu){
    Filter = Filter.filter((word)=>{
      if(word.min_blue <= Blu && word.max_blue >= Blu){
        return true
      }
      return false
    })
  }
  if(Pur){
    Filter = Filter.filter((word)=>{
      if(word.min_purple <= Pur && word.max_purple >= Pur){
        return true
      }
      return false
    })
  }
  if(Yel){
    Filter = Filter.filter((word)=>{
      if(word.min_yello <= Yel && word.max_yello >= Yel){
        return true
      }
      return false
    })
  }
  if(Bla){
    Filter = Filter.filter((word)=>{
      if(word.min_black <= Bla && word.max_black >= Bla){
        return true
      }
      return false
    })
  }
  if(Gre || Red || Blu || Pur || Yel || Bla){
    FilterArr.value = Filter
  }else{
    FilterArr.value = Kailuo_0821
  }
}

const clearBoth=()=>{
  green.value=''
  red.value=''
  blue.value=''
  purple.value=''
  yello.value=''
  black.value=''
  FilterArr.value = Kailuo_0821
}

</script>

<template>
  <Header_0821>
    <router-link :to="{ path: '/Kailuo/0901',}">大航海探险物语（雷霆游戏）宠物孵化计算器</router-link>
  </Header_0821>
  <div >
    <div class="box_input">
      <p class="green">绿</p>
      <input type="text" v-model="green" @blur="toComputed">
      <p class="blue">蓝</p>
      <input type="text" v-model="blue" @blur="toComputed">
      <p class="yello">黄</p>
      <input type="text" v-model="yello" @blur="toComputed">
    </div>
    <div class="box_input">
      <p class="red">红</p>
      <input type="text" v-model="red" @blur="toComputed">
      <p class="purple">紫</p>
      <input type="text" v-model="purple" @blur="toComputed">
      <p class="black">黑</p>
      <input type="text" v-model="black" @blur="toComputed">
    </div>
    <button class="buttom" @click="clearBoth">重置数值</button>
  </div>
  <div class="box head">
    <p class="id">ID</p>
    <p>名称</p>
    <p class="attribute">绿</p>
    <p class="attribute">红</p>
    <p class="attribute">蓝</p>
    <p class="attribute">紫</p>
    <p class="attribute">黄</p>
    <p class="attribute">黑</p>
  </div>
  <div class="box_list">
    <div class="box" v-for="item in FilterArr.value" @click="toDetail(item)">
      <p class="id">{{item.id}}</p>
      <p>{{item.name}}</p>
      <div class="attribute green" v-if="item.min_green !== item.max_green">
        <p>{{item.min_green}} - {{item.max_green}}</p>
      </div>
      <p class="attribute" v-else>--</p>

      <div class="attribute red" v-if="item.min_red !== item.max_red">
        <p>{{item.min_red}} - {{item.max_red}}</p>
      </div>
      <p class="attribute" v-else>--</p>

      <div class="attribute blue" v-if="item.min_blue !== item.max_blue">
        <p>{{item.min_blue}} - {{item.max_blue}}</p>
      </div>
      <p class="attribute" v-else>--</p>

      <div class="attribute purple" v-if="item.min_purple !== item.max_purple">
        <p>{{item.min_purple}} - {{item.max_purple}}</p>
      </div>
      <p class="attribute" v-else>--</p>

      <div class="attribute yellow" v-if="item.min_yello !== item.max_yello">
        <p>{{item.min_yello}} - {{item.max_yello}}</p>
      </div>
      <p class="attribute" v-else>--</p>

      <div class="attribute black" v-if="item.min_black !== item.max_black">
        <p>{{item.min_black}} - {{item.max_black}}</p>
      </div>
      <p class="attribute" v-else>--</p>
    </div>
  </div>
</template>

<style scoped>
.box_list{
  height: calc(100vh - 3.5rem - 2px);
  overflow: auto;
  text-align: center;
  font-size: 0;
  margin: 0 -0.1rem;
}
.box_input{
  font-size: 0.3rem;
  display: flex;
  align-items: center;
}
.box_input input{
  width: 100%;
  padding: 0.1rem;
  border: 1px solid #ccc;
}
.box_input p{
  width:0.6rem;
  padding: 0.2rem;
}
.head{
  margin: 0 -0.1rem;
  width: -webkit-fill-available !important;
}
.buttom{
  font-size: 0.2rem;
  display: block;
  padding: 0.1rem;
  margin: 0.3rem auto;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 0.1rem;
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
.box>p{
  flex:1;
  text-align: left;
}
.box .id,.box .attribute{
  width: 0.5rem;
  flex: inherit;
  flex-shrink: 0;
}
.box .attribute{
  width: 0.9rem;
  text-align: center;
}
.green>p{
  background: #129b12;
  color: #fff;
}
.red>p{
  background: #c61313;
  color: #fff;
}
.blue>p{
  background: #4141ad;
  color: #fff;
}
.purple>p{
  background: #8e398e;
  color: #fff;
}
.yellow>p{
  background: #bfbf1df0;
  color: #fff;
}
.black>p{
  background: #505050;
  color: #fff;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
