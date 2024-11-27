import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/app/home/views/HomeView.vue'),
    },
    {
      path: '/film-rolls',
      name: 'film-rolls',
      component: () => import('@/app/film-rolls/views/FilmRollsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/app/about/views/AboutView.vue'),
    },
  ],
});

export default router;
