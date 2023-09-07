<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const id= ref('')
const detail=reactive({
  value:{},
})

onMounted(()=>{
  getDetail()
})

// 监听
watch(() => route.path, (val) => {
  getDetail()
})

// 获取详情
const getDetail=()=>{
  const paths = route.path.split('/')
  id.value = paths[paths.length - 1]
  detail.value = Kailuo_0821[id.value - 1]
}

// 转跳
const toDetail=(id)=>{
  if(id){
    router.push({path:`/Kailuo/0821/${id}`})
  }
}

</script>

<template>
  <div>
    <Header_0821/>
    <div class="detail_list">
      <h3 class="detail_h3">基础信息</h3>
      <div class="detail_box">
        <p>ID：{{detail.value.id}}</p>
        <p>名称：{{detail.value.name}}</p>
        <p>属性：{{detail.value.attribute?detail.value.attribute:'无'}}</p>
        <p>体型：{{detail.value.shape}}</p>
      </div>

      <h3 class="detail_h3">种族值</h3>
      <div class="detail_box">
        <p>血量：{{detail.value.hp}}</p>
        <p>精力：{{detail.value.hp}}</p>
        <p>攻击：{{detail.value.attack}}</p>
        <p>防御：{{detail.value.guard}}</p>
        <p>速度：{{detail.value.speed}}</p> 
        <p>智力：{{detail.value.wisdom}}</p>
        <p>技能：{{detail.value.skill?detail.value.skill:'无'}}</p>
        <p>技能说明：{{ detail.value.skill_docs?detail.value.skill_docs:'无' }}</p>
      </div>

      <h3 class="detail_h3">宠物蛋孵化值</h3>
      <div class="detail_box">
        <p>绿：{{detail.value.min_green}} - {{detail.value.max_green}}</p>
        <p>红：{{detail.value.min_red}} - {{detail.value.max_red}}</p>
        <p>蓝：{{detail.value.min_blue}} - {{detail.value.max_blue}}</p>
        <p>紫：{{detail.value.min_purple}} - {{detail.value.max_purple}}</p>
        <p>黄：{{detail.value.min_yello}} - {{detail.value.max_yello}}</p>
        <p>黑：{{detail.value.min_black}} - {{detail.value.max_black}}</p>
      </div>

      <h3 class="detail_h3">进化树</h3>
      <div class="detail_box flex_end">
        <div class="iocn_box" @click="toDetail(detail.value.vestigial)">
          <p>{{detail.value.vestigial?Kailuo_0821[detail.value.vestigial - 1].name:'无'}}</p>
        </div>
        <div class="iocn_box" @click="toDetail(detail.value.vestigialTwo)">
          <p>{{detail.value.vestigialTwo?Kailuo_0821[detail.value.vestigialTwo - 1].name:'无'}}</p>
        </div>
        <div class="iocn_box">
          <p>{{detail.value.name}}</p>
        </div>
        <div class="iocn_box" @click="toDetail(detail.value.evolve)">
          <p>{{detail.value.evolve?Kailuo_0821[detail.value.evolve - 1].name:'无'}}</p>
        </div>
        <div class="iocn_box" @click="toDetail(detail.value.evolveTwo)">
          <p>{{detail.value.evolveTwo?Kailuo_0821[detail.value.evolveTwo - 1].name:'无'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail_list{
  height: calc(100vh - 1.1rem);
  overflow: auto;
  font-size: 0;
  padding: 0 0.2rem;
}
.detail_h3{
  font-size: 0.15rem;
  font-weight: 500;
}
.detail_box{
  font-size: 0.2rem;
  border: 1px solid #ccc;
  vertical-align: bottom;
  margin-bottom: 0.2rem;
  padding: 0.2rem;
  line-height: 0.3rem;
}
.detail_box .name{
  padding: 0.1rem 0.05rem;
}
.iocn_box{
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  vertical-align: bottom;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 0.15rem;
  justify-content: center;
  align-items: center;
}
.iocn_box:last-child{
  margin-right: 0;
}
.flex_end{
  display: flex;
  justify-content: space-between;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
