<template>
  <div>
    <div class="hr"></div>
    <div class="title">
      <span class="iconfont  redxin">&#xe639;</span>
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="item"
          v-for="item of recommendList"
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [{
        id: '001',
        url: 'http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_200x200_839ce24d.png',
        title: '重庆欢乐谷',
        desc: '2000条评论',
        price: '180',
        add: true,
        location: '渝北区',
        appendDesc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)',
        star: '5'
      },
      {
        id: '002',
        url: 'http://img1.qunarzz.com/sight/p0/201402/20/d5c7da32877d8b90dc6297e491a4590e.jpg_200x200_49be5ab2.jpg',
        title: '重庆市人民大礼堂',
        desc: '2001210条评论',
        price: '800',
        location: '渝中区',
        add: false,
        appendDesc: '',
        star: '4.6'
      },
      {
        id: '003',
        url: 'http://img1.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_200x200_ccfe9d56.jpg',
        title: '重庆汉海海洋公园',
        desc: '30100条评论',
        price: '132',
        location: '渝北区',
        add: false,
        appendDesc: '',
        star: '4'
      },
      {
        id: '004',
        url: 'http://img1.qunarzz.com/sight/p0/1805/93/93a185e4b726bda0a3.img.jpg_200x200_ea61f3c5.jpg',
        title: '佛影峡生态旅游区',
        desc: '31230条评论',
        price: '1222',
        location: '巴南区',
        add: true,
        appendDesc: '勇士漂流、溯溪探险让你感受中国都市漂流',
        star: '4'
      },
      {
        id: '005',
        url: 'http://img1.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_200x200_c33c2206.jpg',
        title: '梦幻奥陶纪',
        desc: '330条评论',
        price: '222',
        location: '渝北区',
        add: true,
        appendDesc: '世界最长的悬挑空中玻璃走廊',
        star: '4'
      },
      {
        id: '006',
        url: 'http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_200x200_7971dc7e.jpg',
        title: '武隆天生三桥风景区',
        desc: '310条评论',
        price: '112',
        location: '渝中区',
        add: true,
        appendDesc: '近期小伙伴们收藏最！多！的景点😊',
        star: '5'
      }, {
        id: '007',
        url: 'http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_200x200_839ce24d.png',
        title: '重庆欢乐谷',
        desc: '2000条评论',
        price: '180',
        add: true,
        location: '渝北区',
        appendDesc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)',
        star: '4'
      },
      {
        id: '008',
        url: 'http://img1.qunarzz.com/sight/p0/201402/20/d5c7da32877d8b90dc6297e491a4590e.jpg_200x200_49be5ab2.jpg',
        title: '重庆市人民大礼堂',
        desc: '2001210条评论',
        price: '800',
        location: '渝中区',
        add: false,
        appendDesc: '',
        star: '5'
      },
      {
        id: '009',
        url: 'http://img1.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_200x200_ccfe9d56.jpg',
        title: '重庆汉海海洋公园',
        desc: '30100条评论',
        price: '132',
        location: '渝北区',
        add: false,
        appendDesc: '',
        star: '2'
      },
      {
        id: '010',
        url: 'http://img1.qunarzz.com/sight/p0/1805/93/93a185e4b726bda0a3.img.jpg_200x200_ea61f3c5.jpg',
        title: '佛影峡生态旅游区',
        desc: '31230条评论',
        price: '1222',
        location: '巴南区',
        add: true,
        appendDesc: '勇士漂流、溯溪探险让你感受中国都市漂流',
        star: '4'
      },
      {
        id: '011',
        url: 'http://img1.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_200x200_c33c2206.jpg',
        title: '梦幻奥陶纪',
        desc: '330条评论',
        price: '222',
        location: '渝北区',
        add: true,
        appendDesc: '世界最长的悬挑空中玻璃走廊',
        star: '3'
      },
      {
        id: '012',
        url: 'http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_200x200_7971dc7e.jpg',
        title: '武隆天生三桥风景区',
        desc: '310条评论',
        price: '112',
        location: '渝中区',
        add: true,
        appendDesc: '近期小伙伴们收藏最！多！的景点😊',
        star: '5'
      }]
    }
  },
  computed: {

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

        .stars-bg {
          position: relative;
          display: inline-block;
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
        margin-left: 0.3rem;
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
