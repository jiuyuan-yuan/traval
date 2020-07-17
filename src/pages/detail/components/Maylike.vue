<template>
  <div class="container">
    <div class="top-bottom"></div>
    <h2 class="title">看了该景点的人还看了</h2>
    <div class="recommend-item">
      <img class="recommend-img"
           src="http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_228x168_cea80e1e.jpg">
      <div class="recommend-info">
        <div class="recommend-name">重庆欢乐海底世界</div>
        <div class="recommend-price">
          ¥
          <span class="price">120</span>
          <span class="qi">起</span>
        </div>
        <div class="recommend-star">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>
          <span class="recommend-star-text">6363条评论</span>
        </div>
        <div class="recommend-address">重庆·渝中区</div>
      </div>
    </div>
    <div class="recommend-item">
      <img class="recommend-img"
           src="http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_228x168_cea80e1e.jpg">
      <div class="recommend-info">
        <div class="recommend-name">重庆欢乐海底世界</div>
        <div class="recommend-price">
          ¥
          <span class="price">120</span>
          <span class="qi">起</span>
        </div>
        <div class="recommend-star">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>
          <span class="recommend-star-text">6363条评论</span>
        </div>
        <div class="recommend-address">重庆·渝中区</div>
      </div>
    </div>
    <div class="recommend-item">
      <img class="recommend-img"
           src="http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_228x168_cea80e1e.jpg">
      <div class="recommend-info">
        <div class="recommend-name">重庆欢乐海底世界</div>
        <div class="recommend-price">
          ¥
          <span class="price">120</span>
          <span class="qi">起</span>
        </div>
        <div class="recommend-star">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>
          <span class="recommend-star-text">6363条评论</span>
        </div>
        <div class="recommend-address">重庆·渝中区</div>
      </div>
    </div>
    <div class="recommend-item">
      <img class="recommend-img"
           src="http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_228x168_cea80e1e.jpg">
      <div class="recommend-info">
        <div class="recommend-name">重庆欢乐海底世界</div>
        <div class="recommend-price">
          ¥
          <span class="price">120</span>
          <span class="qi">起</span>
        </div>
        <div class="recommend-star">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>
          <span class="recommend-star-text">6363条评论</span>
        </div>
        <div class="recommend-address">重庆·渝中区</div>
      </div>
    </div>
    <div class="recommend-item">
      <img class="recommend-img"
           src="http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_228x168_cea80e1e.jpg">
      <div class="recommend-info">
        <div class="recommend-name">重庆欢乐海底世界</div>
        <div class="recommend-price">
          ¥
          <span class="price">120</span>
          <span class="qi">起</span>
        </div>
        <div class="recommend-star">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>
          <span class="recommend-star-text">6363条评论</span>
        </div>
        <div class="recommend-address">重庆·渝中区</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'maylike',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.container {
  position: relative;
}

.title {
  position: relative;
  padding: 0 0.2rem;
  height: 0.88rem;
  background: #fff;
  color: #333;
  font-size: 0.3rem;
  line-height: 0.88rem;
  text-indent: 0.2rem;
}

.top-bottom {
  border-top: 0.2rem solid #eee;
  height: 0.2rem;
  width: 100%;
}

.title::before {
  content: '';
  position: absolute;
  top: 0.31rem;
  left: 0.25rem;
  width: 0.06rem;
  height: 0.25rem;
  background: #1ba9ba;
  border-radius: 0.04rem;
}

.title::after {
  content: '';
  height: 0.1rem;
  width: 100%;
  border-bottom: 1px solid #eee;
  position: absolute;
  bottom: 0;
  left: 0;
}

.recommend-item {
  position: relative;
  display: flex;
}

.recommend-img {
  margin: 0.2rem 0.2rem 0 0.2rem;
  width: 1.62rem;
  height: 1.62rem;
}

.recommend-info {
  position: relative;
  padding-top: 0.2rem;
  height: 1.8rem;
  flex-grow: 1;

  .recommend-name {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .recommend-price {
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
    line-height: 0.4rem;
    vertical-align: baseline;
    color: #ff9800;

    .price {
      font-size: 0.36rem;
    }

    .qi {
      color: #9e9e9e;
    }
  }

  .stars-bg {
    text-align: center;
    position: relative;
    top: 0.15rem;
    margin-left: -0.8rem;
    display: inline-block;
    transform: scale(0.45);
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

  .recommend-star {
    margin: 0.3rem 0;
  }

  .recommend-star-text {
    margin-left: 0.1rem;
    line-height: 0.35rem;
    font-size: 0.24rem;
    vertical-align: middle;
    color: #9e9e9e;
  }

  .recommend-address {
    position: absolute;
    left: 0.2rem;
    bottom: 0.1rem;
    color: #9e9e9e;
    font-size: 0.24rem;
  }
}

.recommend-item::after {
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #eee;
}
</style>
