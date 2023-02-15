/**
 * Rutas del Módulo Inventario
 */
const routes =
    [
        {
            path: "catalogo",
            name: "inventario-catalogo",
            component: () => import( /* webpackChunkName: "Inventario-Catalogo" */ "../views/Catalogo.vue"),
        },
        {
            path: "catalogo",
            name: "inventario-registro",
            component: () => import( /* webpackChunkName: "Inventario-Registro" */ "../views/Registro.vue"),
        }
    ]

export default routes