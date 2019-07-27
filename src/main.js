import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js' 
import store from './store/index'
import '@/assets/style/reset.css'
import 'lib-flexible'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'animate.css'

//实现无限滑动的插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(MintUI)


//视频插件

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'PGN3YibnwaSxZIG3wIONN8AppArrblqb'
})

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env)
