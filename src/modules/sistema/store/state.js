export default () => (
    {
        // Menus del Sidebar
        allMenus: [
            {
                id: 1,
                group: "Sistema",
                name: "Menus",
                icon: "fa-solid fa-layer-group",
                submenu: "",
                path: "home/sistema/menus"
            },
            {
                id: 2,
                group: "Sistema",
                name: "Usuarios",
                icon: "fa-solid fa-users",
                submenu: "",
                path: "home/sistema/usuarios"
            },
            {
                id: 3,
                group: "Inventario",
                name: "Productos",
                icon: "fa-solid fa-users",
                submenu: "",
                path: ""
            },
            {
                id: 4,
                group: "Inventario",
                name: "Productos",
                icon: "",
                submenu: "Catálogo",
                path: "home/sistema/usuarios"
            },
            {
                id: 5,
                group: "Inventario",
                name: "Productos",
                icon: "",
                submenu: "Registro",
                path: "home/sistema/usuarios"
            },
        ],

        // Grupos de menus del sistema
        groups:
            [
                {
                    id: 1,
                    name: "Inventario",
                },
                {
                    id: 2,
                    name: "Sistema",
                },
            ],

        // Grupos de menus del sistema
        menus:
            [
                {
                    id: 1,
                    name: "Menus",
                },
                {
                    id: 2,
                    name: "Usuarios",
                },
                {
                    id: 3,
                    name: "Productos",
                },
            ],
    })