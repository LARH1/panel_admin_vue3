<template>
<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
    <div class="sidebar-brand d-none d-md-flex">
        <!-- Brand Icon Desktop -->
        <img class="bg-white px-2 py-1" src="assets/img/panel_admin_4.png" alt="Panel Admin" height="45">
    </div>
    <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
        <Sidebar />
    </ul>
    <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
</div>
<div class="wrapper d-flex flex-column min-vh-100 bg-light">
    <header class="header header-sticky mb-4">
        <div class="container-fluid">
            <button class="header-toggler px-md-0 me-md-3" type="button" onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
                <i class="fa-solid fa-bars icon icon-lg"></i>
            </button>
            <!-- Brand mobile -->
            <img class="header-brand d-md-none" src="assets/img/panel_admin_2.png" alt="Panel Admin" height="45">
            <ul class="header-nav d-none d-md-flex">
                Nombre módulo
            </ul>
            <!-- Quick Action Icons -->
            <ul class="header-nav ms-auto">
                <QuickActions />
            </ul>
            <!-- General Actions -->
            <ul class="header-nav ms-3">
                <GeneralActions />
            </ul>
        </div>
        <div class="header-divider"></div>
        <!-- Breadcrumb -->
        <div class="container-fluid">
            <Breadcrumb />
        </div>
    </header>
    <div class="body flex-grow-1 px-3">
        <!-- Contenido de Application -->
        <router-view />
    </div>
    <footer class="footer">
        <Footer />
    </footer>
</div>
</template>

<script>
import
{
    useRouter
}
from 'vue-router';
import
{
    useStore
}
from 'vuex';
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import GeneralActions from "../components/GeneralActions.vue";
import QuickActions from "../components/QuickActions.vue";
import Sidebar from "../components/SideBar.vue";
export default
{
    name: "app-layout",
    components:
    {
        Breadcrumb,
        Footer,
        GeneralActions,
        QuickActions,
        Sidebar,
    },
    setup()
    {
        // FIXME: Solución temporal para recargar el navegador
        // al ingresar por primera vez 
        const store = useStore()
        const router = useRouter()
        const isFirst = store.getters["app/getReload"]
        store.commit("app/changeReload")
        if (isFirst)
        {
            router.go()
        }
    },
}
</script>
