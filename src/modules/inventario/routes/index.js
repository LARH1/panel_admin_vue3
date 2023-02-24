/**
 * Rutas del Módulo Inventario
 */
const routes =
    [
        {
            path: "inventario/catalogo",
            name: "inventario-catalogo",
            component: () => import( /* webpackChunkName: "Inventario-Catalogo" */ "../views/Catalogo.vue"),
        },
        {
            path: "inventario/registro",
            name: "inventario-registro",
            component: () => import( /* webpackChunkName: "Inventario-Registro" */ "../views/Registro.vue"),
        }
    ]

export default routes