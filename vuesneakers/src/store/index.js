import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import totalPrice from './modules/totalPrice'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    totalPrice
  }
})
