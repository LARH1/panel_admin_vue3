import Inventario from "@/modules/inventario/routes"
import Sistema from "@/modules/sistema/routes"
/**
 * Rutas del Home
 */
export default
    {
        name: "home",
        component: () => import(
            /* webpackChunkName: "Layout_Home" */
            "@/modules/app/pages/Layout.vue"),
        children: [
            {
                path: "some",
                name: "some-asd",
                component: () => import(
                    /* webpackChunkName: "EmptyEntry" */
                    "../views/Some.vue"),
            },
            ...Sistema,
            ...Inventario,
        ],
    }