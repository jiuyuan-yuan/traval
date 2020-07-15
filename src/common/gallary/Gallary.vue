<template>
  <div class="container"
       @click.stop="handleGallayClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs"
                      :key="index">
          <img :src="item"
               class="gallary-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      tpye: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallayClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container >>> .swiper-wrapper {
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    .gallary-img {
      bottom: 1rem;
      width: 100%;
    }
  }
}

.swiper-pagination {
  bottom: -1rem;
  color: #FFF;
}
</style>
