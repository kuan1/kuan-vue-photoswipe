import Vue from 'vue'

import App from './App.vue'

import photoSwipe from '../src'

Vue.use(photoSwipe)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
