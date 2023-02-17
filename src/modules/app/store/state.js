export default () => (
    {
        // Menus del Sidebar
        menus: [
            {
                name: "Sistema",
                options: [
                    {
                        name: "Menus",
                        icon: "fa-solid fa-layer-group",
                        path_name: "sistema-menus",
                        type: 1,
                    },
                    {
                        name: "Usuarios",
                        icon: "fa-solid fa-users",
                        path_name: "sistema-usuarios",
                        type: 1,
                    },]
            },
            {
                name: "Inventario",
                options: [
                    {
                        name: "Productos",
                        icon: "fa-solid fa-boxes-stacked",
                        path_name: "",
                        type: 2,
                        options: [
                            {
                                name: "Catálogo",
                                path_name: "inventario-catalogo",
                            },
                            {
                                name: "Registro",
                                path_name: "inventario-registro",
                            },]
                    },]
            },]
    })