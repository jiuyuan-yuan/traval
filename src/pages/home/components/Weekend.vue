<template>
  <div>
    <div class="title">
      <h2>周末去哪儿</h2>
    </div>
    <ul>
      <li class="item"
          v-for="item of weekGoList"
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
  data () {
    return {
      weekGoList: [{
        id: '001',
        url: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg',
        title: '重庆夜景大赏',
        desc: '享巴渝特色，赏两江风光，感受不一样的重庆夜景！'
      }, {
        id: '002',
        url: 'http://img1.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg',
        title: '快乐湿身，水上狂欢',
        desc: '“快乐湿身，水上狂欢”门票低至5折起'
      }, {
        id: '003',
        url: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '重庆必打卡',
        desc: '重庆，非去不可'
      }, {
        id: '004',
        url: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg',
        title: '重庆夜景大赏',
        desc: '享巴渝特色，赏两江风光，感受不一样的重庆夜景！'
      }, {
        id: '005',
        url: 'http://img1.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg',
        title: '快乐湿身，水上狂欢',
        desc: '“快乐湿身，水上狂欢”门票低至5折起'
      }, {
        id: '006',
        url: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '重庆必打卡',
        desc: '重庆，非去不可'
      }]
    }
  },
  computed: {

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
