/**
 * Rutas del Módulo Auth
 */
 const routes =
 [
     {
         path: "auth/login",
         name: "auth-login",
         component: () => import( /* webpackChunkName: "Auth-Login" */ "../views/Login.vue"),
     },
 ]

export default routes