import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router/index"
import Vuesax from "vuesax"
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax);
Vue.use(VuePrism)

new Vue({
        el: '#app',
        store,
        router,
        render: h => h(App)
})
