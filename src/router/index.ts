import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/create-category',
      name: 'Create a category',
      component: () => import('../views/CreateCategoryView.vue')
    },
    {
      path: '/themes/:categoryId',
      name: 'Themes',
      component: () => import('../views/ThemesView.vue')
    },
    {
      path: '/create-theme',
      name: 'create a theme',
      component: () => import('../views/CreateThemeView.vue')
    },
    {
      path: '/cards',
      name: 'Cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/create-card',
      name: 'Create a card',
      component: () => import('../views/CreateCardView.vue')
    },
    {
      path: '/select-revision',
      name: 'Select a revision',
      component: () => import('../views/SelectRevisionView.vue')
    },
    {
      path: '/revision',
      name: 'Revision',
      component: () => import('../views/RevisionView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/SettingsView.vue')
    },
  ]
})

export default router
