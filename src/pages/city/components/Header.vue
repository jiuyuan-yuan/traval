<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <h2>城市选择</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header {
  overflow: hidden;
  line-height: 0.88rem;
  height: 0.88rem;
  font-size: 0.32rem;
  text-align: center;
  background: #00bcd4;
  color: #fff;

  .header-back {
    position: absolute;
    left: 0;
    text-align: center;
    font-size: 0.4rem;
    width: 0.64rem;
    color: #fff;
  }
}
</style>
