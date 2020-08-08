import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuesax from "vuesax";
import VuePrism from "vue-prism";
import "prismjs/themes/prism.css";
import "vuesax/dist/vuesax.css";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(Vuesax);
Vue.use(VuePrism);
Vue.use(VueSimpleMarkdown);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
