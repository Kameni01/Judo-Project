import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
