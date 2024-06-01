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
      path: '/create-theme/:categoryId',
      name: 'Create_a_theme',
      component: () => import('../views/CreateThemeView.vue')
    },
    {
      path: '/cards/:themeId',
      name: 'Cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/create-card/:themeId',
      name: 'Create_a_card',
      component: () => import('../views/CreateCardView.vue')
    },
    {
      path: '/select-category-revision',
      name: 'Select_category_revision',
      component: () => import('../views/SelectCategoryRevisionView.vue')
    },
    {
      path: '/select-theme-revision',
      name: 'Select_theme_revision',
      component: () => import('../views/SelectThemeRevisionView.vue')
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
