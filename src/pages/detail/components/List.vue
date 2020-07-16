<template>
  <div>
    <div class="baseInfo">
      <div class="box-item">
        <!-- 评分  -->
        <div class="box-item-one">
          <!-- 评分 -->
          <div>
            <span class="score">5.0</span>
            <span class="text">分 </span>
            <span class="desc"> 超赞</span>
          </div>
          <!-- 评论条数 -->
          <div>
            <span class="totalcommentnum">15257条评论</span>
            <span class="totalcommentnum">5条攻略</span>
            <span class="iconfont arrow">&#xe623;</span>
          </div>
        </div>
        <!-- 景点简介 -->
        <div class="box-item-one line">
          <!-- 简介 -->
          <div>
            <span class="title">景点简介</span>
          </div>
          <!-- 开放时间 -->
          <div>
            <span class="totalcommentnum">开放时间、贴士</span>
            <span class="iconfont arrow">&#xe623;</span>
          </div>
        </div>
      </div>
      <div class="baseInfo-address">
        <span class="iconfont location">&#xe6f8;</span>
        <span class="iconfont arrow">&#xe623;</span>
        <p class="baseInfo-address-text">重庆市渝北区金渝大道29号重庆欢乐谷</p>
      </div>
    </div>
    <!-- 景区门票 -->
    <div class="ticket-wrapper">
      <div class="ticket-container">
        <!-- 大标题 -->
        <h1 class="item-title">景区门票</h1>
        <!-- 动态渲染内容 -->
        <div>
          <!-- 门票标题 -->
          <div class="ticket-title">
            <span class="ticket-title-icon">.</span>
            <span>桃花源门票</span>
          </div>

          <!-- 门票详情 -->
          <div class="ticket-title-info">
            <span class="iconfont arrow">&#xe623;</span>
            <p>含太古洞+世外桃源；优待政策</p>
          </div>
          <!-- 门票列表 -->
          <div class="ticket-list">
            <!-- 门票种类 -->
            <div class="ticket-group">
              <div class="ticket-name">成人票</div>
              <div class="ticket-price">
                <span>¥</span>
                <span class="ticket-price-num">43</span>
                <span>起 </span>
                <span :class="expandIconClassName"
                      @click.stop="expandClick">&#xe6b1;</span>
              </div>
              <!-- 票价详情 -->
              <div class="expand-item"
                   v-show="expand">
                <div class="ticket-price-list">
                  <!-- 详情内列表 -->
                  <div class="ticket-price-item">
                    <p class="ticket-price-item-title">酉阳桃花源门票成人票(当日订)</p>
                    <div class="ticket-price-item-detail">
                      <div class="booking-time">
                        <p>16:30前随买随用</p>
                        <p>条件退</p>
                        <p class="booking-time-know">蓝精灵|预定须知</p>
                      </div>
                      <div class="ticket-price-item-booking">
                        <span>¥</span>
                        <span class="ticket-price-item-text">80</span>
                        <p class="booking">立即预定</p>
                      </div>
                    </div>
                  </div>

                  <div class="ticket-price-item">
                    <p class="ticket-price-item-title">酉阳桃花源门票成人票(当日订)</p>
                    <div class="ticket-price-item-detail">
                      <div class="booking-time">
                        <p>16:30前随买随用</p>
                        <p>条件退</p>
                        <p class="booking-time-know">蓝精灵|预定须知</p>
                      </div>
                      <div class="ticket-price-item-booking">
                        <span>¥</span>
                        <span class="ticket-price-item-text">80</span>
                        <p class="booking">立即预定</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 票价详情结束 -->
            </div>
          </div>
        </div>
        <!-- 动态内容结束 -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: Array
  },
  data () {
    return {
      // 扩展
      expand: false
    }
  },
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/api/ticket.json')
      console.log(res)
    },
    expandClick () {
      this.expand = !this.expand
    }
  },
  computed: {
    expandIconClassName () {
      const className = this.expand === true ? 'iconfont expand icon-rotate' : 'iconfont expand'
      return className
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
.baseInfo {
  position: relative;
  top: -0.1rem;
  padding: 0.1rem 0.2rem 0 0.2rem;
  margin-bottom: 0.1rem;
  background: #fff;
  border-radius: 0.1rem 0.1rem 0 0;
  border-bottom: 0.2rem solid #eee;

  .box-item {
    display: flex;
    flex: 1;
    width: 100%;
    padding: 0.2rem 0;

    .line::before {
      content: '';
      border-left: 1px solid #f0f0ef;
      width: 0.1rem;
      height: 100%;
      position: absolute;
      left: -0.1rem;
      top: 0;
    }

    .box-item-one {
      position: relative;
      width: 50%;

      .score {
        font-size: 0.44rem;
        color: #ff8300;
        line-height: 0.44rem;
      }

      .text {
        font-size: 0.28rem;
        color: #ff8300;
        line-height: 0.48rem;
      }

      .desc {
        font-size: 0.28rem;
        color: #ff8300;
        line-height: 0.48rem;
        margin-left: 0.2rem;
      }

      .totalcommentnum {
        font-size: 0.24rem;
        color: #9e9e9e;
        line-height: 0.32rem;
        margin-right: 0.2rem;
      }

      .title {
        font-size: 0.28rem;
        color: #212121;
        line-height: 0.48rem;
      }
    }
  }

  .baseInfo-address::before {
    content: '';
    border-top: 1px solid #f0f0ef;
    width: 100%;
    height: 0.1rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .baseInfo-address {
    display: block;
    position: relative;
    padding: 0.2rem 0;
    line-height: 0.36rem;
    color: #212121;

    .baseInfo-address-text {
      padding-right: 0.56rem;
      padding-left: 0.56rem;
    }
  }

  .location {
    position: absolute;
    top: 0.2rem;
    left: 0.1rem;
    color: #9e9e9e;
    font-size: 0.3rem;
  }
}

.arrow {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  color: #9e9e9e;
  font-size: 0.24rem;
}

.ticket-container {
  height: 5rem;

  .item-title {
    overflow: hidden;
    position: relative;
    z-index: 4;
    background: #fff;
    color: #212121;
    font-size: 0.4rem;
    line-height: 0.56rem;
    font-weight: bold;
    padding: 0.32rem 0 0 0.3rem;
  }

  .ticket-title {
    font-size: 0.32rem;
    line-height: 0.44rem;
    font-weight: bold;
    color: #212121;
    align-items: baseline;
    display: flex;
    padding-top: 0.28rem;

    .ticket-title-icon {
      background: #00bfd4;
      line-height: 0.3rem;
      margin: 0 0.2rem;
      color: #00bfd4;
    }
  }

  .ticket-title-info {
    position: relative;
    font-size: 0.22rem;
    line-height: 0.32rem;
    color: #616161;
    background: #f8f8f8;
    border-radius: 0.08rem;
    padding: 0.16rem 0.2rem;
    margin: 0.2rem;
    margin-top: 0.2rem;
  }

  .ticket-list {
    padding: 0.1rem 0.2rem;
    background: #fff;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.16rem;
    margin: 0.3rem 0.3rem 0 0.3rem;
    overflow: hidden;

    .ticket-group {
      padding: 0.2rem 0;
      position: relative;
      margin-top: 0.1rem;

      .ticket-name {
        color: #333;
        font-size: 0.3rem;
        line-height: 0.48rem;
      }

      .ticket-price {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.25rem 0.5rem 0.2rem 0;
        color: #ff9800;
        font-size: 0.24rem;

        .ticket-price-num {
          margin-left: 0.04rem;
          font-size: 0.4rem;
        }

        .expand {
          color: #aaa;
        }
      }

      .expand-item {
        background: #f8f8f8;
        padding: 0rem 0.32rem 0.3rem;
        border-radius: 0.16rem;
        position: relative;

        .ticket-price-item::before {
          content: '';
          border-top: 1px solid #e0e0e0;
          width: 100%;
          position: absolute;
          top: 0;
        }

        .ticket-price-item {
          position: relative;
          padding: 0.4rem 0 0.6rem 0;
          margin: 0.3rem 0;

          .ticket-price-item-detail {
            position: relative;

            .booking-time-know {
              line-height: 0.5rem;
            }
          }

          .ticket-price-item-title {
            padding: 0;
            color: #333;
            font-size: 0.28rem;
            line-height: 0.4rem;
          }

          .booking-time {
            height: 0.32rem;
            color: #00afc7;
            font-size: 0.24rem;
            line-height: 0.32rem;
            white-space: nowrap;
          }

          .ticket-price-item-booking {
            text-align: center;
            color: #ff8300;
            position: absolute;
            right: 0;
            top: 0;

            .ticket-price-item-text {
              font-size: 0.45rem;
            }

            .booking {
              height: 0.52rem;
              width: 1.5rem;
              margin-top: 0.12rem;
              color: #fff;
              font-size: 0.24rem;
              line-height: 0.52rem;
              -webkit-border-radius: 0.3rem;
              -moz-border-radius: 0.3rem;
              border-radius: 0.3rem;
              background-image: -webkit-gradient(linear, left top, right bottom, from(#ffab1e), to(#ff8c12));
              background-image: -webkit-linear-gradient(-45deg, #ffab1e 0, #ff8c12 100%);
              background-image: -moz-linear-gradient(-45deg, #ffab1e 0, #ff8c12 100%);
              background-image: -o-linear-gradient(-45deg, #ffab1e 0, #ff8c12 100%);
              background-image: linear-gradient(145deg, #ffab1e 0, #ff8c12 100%);
            }
          }
        }
      }
    }

    .ticket-group::before {
      content: '';
      border-top: 1px solid #eee;
      width: 100%;
      position: absolute;
      top: -0.21rem;
    }

    .icon-rotate {
      display: inline-block;
      transform: rotate(0.5turn);
      transition: transform 0.5s;
    }
  }
}
</style>
