import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home";
import QuestionPage from "../views/QuestionPage";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/questions",
      component: QuestionPage,
      name: "questionPage"
    }
  ]
});
