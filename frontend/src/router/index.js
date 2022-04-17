import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/view',
      name: 'view',
      component: DataView,
    },
    {
      path: '/github',
      name: 'github',
      component: DataView,
      beforeEnter(to, from, next) {
        window.location.href = "https://github.com/GrantHend00/HackDavis2022/blob/main/model/README.md";
      }
    },
    {
      path: '/usfire',
      name: 'usfire',
      component: DataView,
      beforeEnter(to, from, next) {
        window.location.href = "https://www.usfa.fema.gov/";
      }
    }

  ]
})

export default router
