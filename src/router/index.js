import {defineAsyncComponent} from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    // Pagina principal
    path: '/',
    name: 'home',
    component: defineAsyncComponent(() => import(
      /**LayoutTemplate */
      "@/modules/app/pages/Layout.vue"))
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(
      /* webpackChunkName: "about" */
      '../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
