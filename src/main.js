// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MBlock from 'components/m-block/MBlock'
import router from './router'
// import 'common/fonts/iconfont.css'
import 'common/style/index.scss'

Vue.config.productionTip = false
Vue.component('m-block', MBlock)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
