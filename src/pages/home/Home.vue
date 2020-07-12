<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    ddd
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="less" scoped>
.home {
  font-size: 30px;
}
</style>
