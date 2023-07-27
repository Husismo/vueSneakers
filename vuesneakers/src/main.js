import Vue from 'vue'
import App from './App.vue'
import './icons';
import router from './router'
import Api from "@/api/instance"
import store from './store'
Vue.use(Api)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
