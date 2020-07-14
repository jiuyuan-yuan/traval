import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
