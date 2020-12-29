import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Lightbox from "vue-my-photos";

Vue.config.productionTip = false;
Vue.component("lightbox", Lightbox);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
