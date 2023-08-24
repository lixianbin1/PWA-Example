<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="main">
    <div class="card_box">
      <h1 class="animation">
        404
      </h1>
      <button class="backbutton" @click="router.replace('/')">
        Back
      </button>
    </div>
  </main>
</template>

<style>
.backbutton{
  background: #545c64;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
}
.animation{
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  animation: shake .6s ease-in-out infinite alternate;
  user-select: none;
}
.main{
  height:100%;
  background:#ccc;
}
.card_box{
  width: 450px;
  height: 200px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -225px;
}
.card_box h1{
  font-size: 100px;
  letter-spacing: 30px;
}
@keyframes shake {
    0%,to {
        transform: translate(-1px)
    }

    10% {
        transform: translate(2px,1px)
    }

    30% {
        transform: translate(-3px,2px)
    }

    35% {
        transform: translate(2px,-3px);
        filter: blur(4px)
    }

    45% {
        transform: translate(2px,2px) skewY(-8deg) scaleX(.96);
        filter: blur(0)
    }

    50% {
        transform: translate(-3px,1px)
    }
}
</style>
