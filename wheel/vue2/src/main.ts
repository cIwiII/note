import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./request";

Vue.config.productionTip = true;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
