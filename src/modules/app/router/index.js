/**
 * Rutas de Application
 */
export default
    {
        name: "home",
        component: () => import(
            /* webpackChunkName: "daybook" */
            "@/modules/app/pages/Layout.vue"),
        children: [
            {
                path: "some",
                name: "some-asd",
                component: () => import(
                    /* webpackChunkName: "EmptyEntry" */
                    "../views/Some.vue"),
            }
        ],
    }