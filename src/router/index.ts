import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '../store';
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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "my-dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "my-explore" */ '../views/Explore.vue'),
  },
  {
    path: '/explore/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "my-search" */ '../views/Search.vue'),
  },
  {
    path: '/explore/new',
    name: 'ProjectNew',
    component: () => import(/* webpackChunkName: "my-project-new" */ '../views/ProjectNew.vue'),
  },
  {
    path: '/project',
    name: 'MyProject',
    component: () => import(/* webpackChunkName: "my-project" */ '../views/Project.vue'),
  },
  {
    path: '/application',
    name: 'MyApplication',
    component: () => import(/* webpackChunkName: "my-application" */ '../views/Application.vue'),
  },
  {
    path: '/profile',
    name: 'MyProfile',
    component: () => import(/* webpackChunkName: "my-profile" */ '../views/Profile.vue'),
  },
  {
    path: '/project/:id',
    name: 'ProjectTemplate',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "project-template" */ '../views/ProjectTemplate.vue'),
  },
  {
    path: '/project/:projectId/position/new',
    name: 'PositionNew',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "position-new" */ '../views/PositionNew.vue'),
  },
  {
    path: '/project/:projectId/position/:id',
    name: 'PositionTemplate',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "position-template" */ '../views/PositionTemplate.vue'),
  },
  {
    path: '/application/new',
    name: 'ApplicationNew',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "application-new" */ '../views/ApplicationNew.vue'),
  },
  {
    path: '/application/:id',
    name: 'ApplicationTemplate',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "application-template" */ '../views/ApplicationTemplate.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.user !== undefined;
  const authList = ['/dashboard', '/explore', '/project', '/application', '/profile'];
  if (authList.some((l) => to.path.startsWith(l)) && isAuthenticated === false) {
    next({ name: 'Login' });
  } else next();
});

export default router;
