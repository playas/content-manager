import Vue from 'vue'

import App from './App.vue'

import './plugins/element.js'

import './global.scss'

Vue.config.productionTip = false

import store from './store'

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app')
