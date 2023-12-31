import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import favorites from "./modules/favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    favorites,
  },
});
