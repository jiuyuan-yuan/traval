<template>
  <div class="comment-container">
    <h1 class="comment-title">用户评论</h1>
    <!-- 评论列表 -->
    <div class="comment-list">
      <!-- 评论项 -->
      <div class="comment-item">
        <!-- 星-用户-时间  -->
        <div class="comment-stardate">
          <span class="stars-bg">
            <i class="star-active"
               style="width:80%"></i>
          </span>

          <span class="comment-data">d*7 2018-08-23</span>
        </div>
        <!-- 评论内容 -->
        <p class="comment-content">
          网上买票很方便，直接刷身份证就好不用取票，不过现在疫情尚未结束，所以还是需要量体温 刷渝康码，到现在也还是只有两个大洋馆和雨林馆，适合小朋友去玩没有很复杂路线，一些主题恐龙园呀也是可以让小朋友耍很久的，看了个人鱼表演只有10几分钟，完了还可以跟人鱼表演合影，不过想合影的话最好在前面坐在地上靠前的位置，不然很可能是挤不进去的节奏
        </p>
      </div>
      <div class="comment-item">
        <!-- 星-用户-时间  -->
        <div class="comment-stardate">
          <span class="stars-bg">
            <i class="star-active"
               style="width:100%"></i>
          </span>

          <span class="comment-data">a*7 2018-09-22</span>
        </div>
        <!-- 评论内容 -->
        <p class="comment-content">
          四点半才去的，没有小朋友，玩的比较快，差不多一个小时就可以，晚点去人也很少，很漂亮呀，厕所找了好半天，难受嘤嘤嘤，海狮表演时间2.30和4.30，昨天错过了，第一次去海洋馆感觉还不错
        </p>
        <!-- 评论图片集 -->
        <div class="comment-imgs">
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">
              <img src="http://img1.qunarzz.com/piao/fusion/1808/2a/f34781e158d74d02.jpg_228x168_f6706606.jpg">
            </div>
          </div>
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">
              <img src="http://img1.qunarzz.com/piao/fusion/1808/31/fae2465d267fc502.jpg_228x168_a8ca175a.jpg">
            </div>
          </div>
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">
              <img src="http://img1.qunarzz.com/piao/fusion/1808/7d/a132b1a15e90fc02.jpg_228x168_b6ba8861.jpg">
            </div>
          </div>
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">
              <img src="http://img1.qunarzz.com/piao/fusion/1808/c1/5b2789652c35b002.jpg_228x168_8e1051b8.jpg">
            </div>
          </div>
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">
              <img src="http://img1.qunarzz.com/piao/fusion/1808/d5/a7a75c5e8cbf6a02.jpg_228x168_f914517c.jpg">
            </div>
          </div>
          <div class="comment-imgs-inte-wrapper">
            <div class="comment-imgs-inter">

              <img src="http://img1.qunarzz.com/piao/fusion/1808/b0/91bf0aa3ee085a02.jpg_228x168_76beb55e.jpg">
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="see-all-comment">
      查看所有点评
      <span class="iconfont">&#xe71a;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comment',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.comment-container {
  margin: 0.3rem 0.1rem;
  position: relative;

  .comment-title {
    overflow: hidden;
    position: relative;
    background: #fff;
    color: #212121;
    font-size: 0.4rem;
    line-height: 0.56rem;
    font-weight: bold;
    padding: 0.32rem 0 0 0.04rem;
  }

  .comment-title::before {
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #eee;
    bottom: 0;
  }

  .comment-list {
    .comment-item {
      position: relative;
      padding: 0.1rem 0.2rem 0.2rem 0.2rem;

      .comment-stardate {
        margin-top: 0.1rem;
        line-height: 0.6rem;

        .stars-bg {
          text-align: center;
          position: relative;
          top: 0.15rem;
          margin-left: -0.8rem;
          display: inline-block;
          transform: scale(0.5);
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

      .comment-data {
        position: relative;
        float: right;
        top: 0.2rem;
        right: 0;
        line-height: 0.34rem;
        font-size: 0.24rem;
        color: #9e9e9e;
      }

      .comment-content {
        word-break: break-all;
        word-wrap: break-word;
        line-height: 0.42rem;
        font-size: 0.26rem;
        color: #616161;
      }

      .comment-imgs {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-between;

        .comment-imgs-inte-wrapper {
          width: 33.33%;
        }

        .comment-imgs-inter {
          margin: 0.07rem;

          img {
            width: 100%;
          }
        }
      }
    }

    .comment-item::before {
      content: '';
      position: absolute;
      width: 100%;
      border-bottom: 1px solid #eee;
      bottom: 0;
      left: 0;
    }
  }

  .see-all-comment {
    position: relative;
    margin-top: -0.02rem;
    height: 1rem;
    color: #616161;
    line-height: 1rem;
    text-align: center;
  }
}
</style>
