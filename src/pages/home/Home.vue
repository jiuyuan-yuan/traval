<template>
  <div>
    <home-header></home-header>
    <div class="home">home</div>
    <router-link to="/list">列表页</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  components: {
    HomeHeader
  }
}
</script>

<style lang="less" scoped>
.home {
  font-size: 30px;
}
</style>
