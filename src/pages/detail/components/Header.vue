<template>
  <div>
    <div class="header-abs"
         v-show="showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont back">&#xe624;</div>
      </router-link>
      <h1 class="header-title">重庆欢乐谷</h1>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = true
      } else {
        this.showAbs = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.header-abs {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  display: block;
  background: #00bcd4;
  z-index: 10;

  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.8rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    color: #fff;
    font-weight: 800;
  }

  .header-title {
    overflow: hidden;
    margin: 0 1rem;
    line-height: 0.88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.32rem;
    text-align: center;
    color: #fff;
  }
}
</style>
