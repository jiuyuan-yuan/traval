<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
    <detail-comment></detail-comment>
    <detail-maylike></detail-maylike>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailComment from './components/Comment'
import DetailMaylike from './components/Maylike'
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment,
    DetailMaylike
  },
  data () {
    return {
      list: [
        {
          title: '学生票'
        }, {
          title: '儿童票'
        }, {
          title: '成人票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
