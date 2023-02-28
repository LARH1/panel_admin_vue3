import {createRouter,createWebHashHistory} from 'vue-router'

import homeRouter from "@/modules/app/router";
import isAuthenticated from './auth-guard';
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // About
    path: '/about',
    name: 'about',
    component: () => import(
      /* webpackChunkName: "about" */
      '../views/AboutView.vue')
  },
  {
    path: "/auth",
    name: "auth-login",
    component: () => import(
      /** webpackChunkName "auth" */
      "@/modules/auth/views/Login.vue"
    )
  },
  {
    beforeEnter: [isAuthenticated], 
    // Home
    path: "/home",
    ...homeRouter
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
