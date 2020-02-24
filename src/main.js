import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"

import Vuesax from "vuesax"
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax);

new Vue({
        el: '#app',
        store,
        render: h => h(App)
})
