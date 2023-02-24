/**
 * Rutas del Módulo Sistema
 */
const routes =
    [
        {
            path: "sistema/menus",
            name: "sistema-menus",
            component: () => import( /* webpackChunkName: "Sistema-Modulos" */ "../views/Menus.vue"),
        },
        {
            path: "sistema/usuarios",
            name: "sistema-usuarios",
            component: () => import( /* webpackChunkName: "Sistema-Usuarios" */ "../views/Usuarios.vue"),
        },
    ]

export default routes