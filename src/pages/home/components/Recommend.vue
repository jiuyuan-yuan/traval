<template>
  <div>
    <div class="hr"></div>
    <div class="title">
      <span class="iconfont  redxin">&#xe639;</span>
      <span>猜你喜欢</span>
    </div>
    <ul>
      <router-link class="item"
                   tag="li"
                   :to="'/detail/'+item.id"
                   v-for="item of list"
                   :key="item.id">
        <img class="img"
             :src="item.url">
        <div class="item-info">
          <h2 class="item-title">{{item.title}}</h2>
          <div class="item-desc">
            <div class="star-eval">
              <span class="stars-bg">
                <i class="star-active"
                   :style="{width:item.star/5*100+'%'}"></i>
              </span>
            </div>
            <span class="desc-comment">{{item.desc}}</span>
          </div>
          <div class="item-detail">
            <span class="price">¥
              <em class="price-money">{{item.price}}</em>
            </span>起
            <span class="location">{{item.location}}</span>
          </div>
          <span class="append-desc"
                v-if="item.add">{{item.appendDesc}}</span>
        </div>
      </router-link>
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
.hr {
  height: 0.2rem;
  background: #eee;
}

.title {
  margin: 0.2rem 0;
  line-height: 0.8rem;
  text-indent: 0.1rem;

  .redxin {
    color: red;
  }
}

.item {
  overflow: hidden;
  display: flex;

  .img {
    width: 2rem;
    height: 2rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;

      .star-eval {
        display: inline-block;
        margin-top: 0.2rem;

        .stars-bg {
          text-align: center;
          position: relative;
          margin-left: -0.6rem;
          display: inline-block;
          transform: scale(0.6);
          height: 0.38rem;
          width: 3.14rem;
          background: url('../../../assets/images/star.jpg') 0 0;

          .star-active {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            height: 100%;
            background: url('../../../assets/images/star.jpg') 0 -0.48rem;
          }
        }
      }

      .desc-comment {
        margin-left: 0.2rem;
        vertical-align: text-bottom;
      }
    }

    .item-detail {
      line-height: 0.9rem;
      position: relative;
      font-size: 0.3rem;
      margin-bottom: 0.2rem;

      .price {
        position: relative;
        left: 0;
        color: #ff8300;

        .price-money {
          font-size: 0.6rem;
        }
      }

      .location {
        position: absolute;
        right: 0;
      }
    }

    .append-desc {
      margin-left: 0.5rem;
      color: #f55;
      font-size: 0.24rem;
      line-height: 0.34rem;
    }
  }
}
</style>
