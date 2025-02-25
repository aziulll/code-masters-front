import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Pages/HomePage.vue'
import MainLayout from '@/views/Layout/MainLayout.vue'
import ArticlePage from '@/views/Pages/ArticlePage.vue'
import AboutCreatorPage from '@/views/Pages/AboutCreatorPage.vue'
import AuthLauout from '@/views/Layout/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: HomePage,
        },
        { path: 'article/3', component: ArticlePage },
        { path: 'about/creator', component: AboutCreatorPage },
      ],
    },
    {
      path: '/',
      component: AuthLauout,
      children: [
        {
          path: 'register',
          component: HomePage,
        },
        { path: 'login', component: ArticlePage },
      ],
    },
  ],
})

export default router
