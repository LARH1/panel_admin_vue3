/**
 * Rutas del Módulo Sistema
 */
const routes =
    [
        {
            path: "menus",
            name: "sistema-menus",
            component: () => import( /* webpackChunkName: "Sistema-Modulos" */ "../views/Menus.vue"),
        },
        {
            path: "menus",
            name: "sistema-usuarios",
            component: () => import( /* webpackChunkName: "Sistema-Usuarios" */ "../views/Usuarios.vue"),
        },
    ]

export default routes