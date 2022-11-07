import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
document.title = "GT2022";

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
