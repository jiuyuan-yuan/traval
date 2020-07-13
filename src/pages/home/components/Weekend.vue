<template>
  <div>
    <div class="title">
      <h2>周末去哪儿</h2>
    </div>
    <ul>
      <li class="item"
          v-for="item of list"
          :key="item.id">
        <img class="img"
             :src="item.url">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
.title {
  line-height: 1rem;
  background: #eee;

  h2 {
    padding-left: 0.2rem;
  }
}

.img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;

  .item-title {
    overflow: hidden;
    padding-left: 0.2rem;
    padding-right: 1.4rem;
    color: #212121;
    font-size: 0.28rem;
    line-height: 0.48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    padding-left: 0.2rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
