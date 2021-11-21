import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "terms-and-conditions" */ '../views/TermsAndConditions.vue'),
  },
  {
    path: '/cookies-policy',
    name: 'CookiesPolicy',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "terms-and-conditions" */ '../views/CookiesPolicy.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "terms-and-conditions" */ '../views/PrivacyPolicy.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
