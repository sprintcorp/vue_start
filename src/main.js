import Vue from 'vue'
import App from './App.vue'
import Header from './Component/Header.vue'

Vue.component('Head',Header)
new Vue({
  el: '#app',
  render: h => h(App)
})
