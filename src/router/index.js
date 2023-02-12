import {createRouter,createWebHashHistory} from 'vue-router'

import homeRouter from "@/modules/app/router";
const routes = [
  {
    // About
    path: '/about',
    name: 'about',
    component: () => import(
      /* webpackChunkName: "about" */
      '../views/AboutView.vue')
  },
  {
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
