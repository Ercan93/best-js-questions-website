import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router/index"
import Vuesax from "vuesax"
import VueHighlightJS from 'vue-highlightjs'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax);
Vue.use(VueHighlightJS)

new Vue({
        el: '#app',
        store,
        router,
        render: h => h(App)
})
