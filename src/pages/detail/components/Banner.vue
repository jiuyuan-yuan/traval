<template>
  <div class="banner"
       @click="bannerClick">
    <img class="banner-img"
         src="//img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_600x330_d421ab3d.png">
    <div class="banner-info">
      <div class="banner-title">成都融创雪世界</div>
      <div class="video">
        视频
        <span class="iconfont forward">&#xe623;</span>
      </div>
      <div class="pic">
        <div class="banner-number">
          <span class="iconfont ">&#xe60b;</span>
          30
        </div>
      </div>
      <fade-animation>
        <common-gallary :imgs="imgs"
                        v-show="showGallary"
                        @close="gallaryClose">
        </common-gallary>
      </fade-animation>
    </div>
    <div class="back"
         @click="handleBack">
      <span class="iconfont ">&#xe624;</span>
    </div>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_r_800x800_ae927025.png',
        'http://img1.qunarzz.com/sight/p0/1709/64/64b4f1b7a5201f02a3.img.jpg_r_800x800_bfbec294.jpg'
      ],
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    bannerClick () {
      this.showGallary = true
    },
    gallaryClose () {
      this.showGallary = false
    },
    handleBack (e) {
      e.stopPropagation()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.1rem;
    line-height: 0.6rem;
    display: flex;
    color: #FFF;
    font-size: 0.4rem;

    .pic {
      position: absolute;
      left: 0.2rem;
      bottom: 0.86rem;

      .banner-number {
        padding: 0 0.2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 0.25rem;
      }
    }

    .banner-title {
      flex: 1;
      padding: 0 0.2rem;
    }

    .video {
      padding: 0 0.4rem;
      height: 0.4rem;
    }
  }

  .back {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    display: block;
    width: 0.72rem;
    line-height: 0.72rem;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-radius: 50%;
    font-size: 0.35rem;
    color: #fff;
  }
}
</style>
