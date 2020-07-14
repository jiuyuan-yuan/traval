<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :hotCities="hotCities"
               :letter="letter">
    </city-list>
    <home-alphabet :cities="cities"
                   @change="letterChange">
    </home-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import HomeAlphabet from './components/Alphabet'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    HomeAlphabet
  },
  methods: {
    async getCityInfo () {
      const { data: res } = await this.$http.get('/api/city.json')
      // console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    letterChange (letter) {
      // console.log(typeof letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
