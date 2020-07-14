<template>
  <div class="list-wrapper"
       ref="wrapper">
    <div class="content">
      <div class="area">
        <h2 class="title">热门城市</h2>
        <ul class="hot-list">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title">热门城市</h2>
        <ul class="letter-list">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title">A</h2>
        <ul class="list">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title">B</h2>
        <ul class="list">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bsscroll from 'better-scroll'
export default {
  mounted () {
    this.scroll = new Bsscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.list-wrapper {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.44rem;
  font-size: 0.24rem;
  background: #ccc;
  padding-left: 0.2rem;
  overflow: hidden;
  background: #f5f5f5;
}

.hot-list > li {
  width: 33.3%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  text-align: center;
  border-bottom: 0.04rem solid #eee;
  margin-bottom: -1px;
  float: left;
  position: relative;
  color: #212121;
  background: #fff;
}

.hot-list {
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 33.33%;
    left: 33.33%;
    height: 3.6rem;
    border-left: 0.02rem solid #eee;
    border-right: 0.02rem solid #eee;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    width: 10%;
    left: 75%;
    height: 100%;
    border-left: 0;
    border-right: 0;
  }
}

.letter-list {
  position: relative;
  overflow: hidden;
  z-index: 0;
  background-color: #fff;
  padding: 0.3rem 0;
}

.letter-list>li {
  width: 16.66%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  text-align: center;
  float: left;
  position: relative;
  color: #212121;
}

.list {
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 25%;
    left: 25%;
    height: 100%;
    border-left: 0.02rem solid #ddd;
    border-right: 0.02rem solid #ddd;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 10%;
    left: 75%;
    height: 100%;
    border-left: 0.02rem solid #ddd;
    border-right: 0;
  }
}

.list>li {
  width: 25%;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  text-align: center;
  border-bottom: 0.02rem solid #ddd;
  margin-bottom: -1px;
  float: left;
  position: relative;
  z-index: 10;
  color: #212121;
}
</style>
