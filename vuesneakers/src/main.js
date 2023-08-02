import "./icons";
import Vue from "vue";
import Api from "@/api/instance";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 
  Код не должен выглядеть как сжатый кусок говна,
  проставляй переносы строки где это нужно
*/
Vue.use(Api);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
