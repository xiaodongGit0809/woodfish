import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/muyu.vue'),
  },
  {
    path: '/shaoxiang',
    component: () => import('./pages/shaoxiang.vue'),
  },
  {
    path: '/qiuqian',
    component: () => import('./pages/qiuqian.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
