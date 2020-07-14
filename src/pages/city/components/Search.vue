<template>
  <div>
    <div class="search">
      <input type="text"
             v-model="keyword"
             placeholder="输入城市名或拼音"
             class="search-input">
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li v-for="item of list"
            :key="item.name"
            class="search-item"
            @click="cityClick(item.name)">
          {{item.name}}</li>
        <li class="search-item"
            v-show="hasDate">
          没有相关数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bsscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      // 搜素出的内容
      list: [],
      timer: null
    }
  },
  methods: {
    cityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bsscroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(element => {
            // 根据输入字幕长度匹配
            const firstSpell = element.spell.slice(0, this.keyword.length)

            if (firstSpell.indexOf(this.keyword.toLowerCase()) > -1 ||
              element.name.indexOf(this.keyword) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasDate () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;

  .search-input {
    box-sizing: border-box;
    padding: 0.3rem;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #fff;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    border-bottom: 1px solid #eee;
  }
}
</style>
