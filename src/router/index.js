import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import service from '../views/service.vue';
import activity from '../views/activity.vue';
import Solution from '../views/solution.vue';
import about from '../views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/serviceGuarantee',
    name: 'serviceGuarantee',
    component: service,
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity,
  },
  {
    path: '/Solution',
    name: 'Solution',
    component: Solution,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
