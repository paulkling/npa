import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import { authGuard } from "../auth";

Vue.use(Router);
Vue.use(require('vue-cookies'))
Vue.$cookies.remove('auth0.is.authenticated')
Vue.$cookies.remove('_legacy_auth0.is.authenticated')

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    }
  ]
});

export default router;
