import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import home from "../views/Home"
import questionPage from "../views/QuestionPage"

export default new VueRouter({
        model: 'history',
        routes: [
                {
                        path: '/',
                        component: home,
                        name: "home"
                },
                {
                        path: '/questions',
                        component: questionPage,
                        name: "questionPage"
                }
        ]
});