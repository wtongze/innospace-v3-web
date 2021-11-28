import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
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
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue'),
  },
  {
    path: '/my/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/my/project',
    name: 'MyProject',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
  },
  {
    path: '/my/application',
    name: 'MyApplication',
    component: () => import(/* webpackChunkName: "application" */ '../views/Application.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // const isAuthenticated = firebase.auth().currentUser;
  console.log(firebase.auth().currentUser);
  const isAuthenticated = true;
  if (to.path.includes('/my') && isAuthenticated === null) next({ name: 'Login' });
  else next();
});

export default router;
