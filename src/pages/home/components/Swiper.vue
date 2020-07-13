<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img :src="item.url"
             class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: '3000'
      },
      swiperList: [{
        id: '001',
        url: require('../../../assets/images/1.jpg')
      }, {
        id: '002',
        url: require('../../../assets/images/2.jpeg')
      }, {
        id: '003',
        url: require('../../../assets/images/3.jpeg')
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-img {
  width: 100%;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
}
</style>
