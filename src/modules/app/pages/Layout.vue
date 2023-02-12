<template>
<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
    <div class="sidebar-brand d-none d-md-flex">
        <!-- Brand Icon Mobile -->
        <svg class="sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#full"></use>
        </svg>
        <!-- Brand Icon desktop -->
        <svg class="sidebar-brand-narrow" width="46" height="46" alt="CoreUI Logo">
            <use xlink:href="assets/brand/coreui.svg#signet"></use>
        </svg>
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
            <a class="header-brand d-md-none" href="#">
                <svg width="118" height="46" alt="CoreUI Logo">
                    <use xlink:href="assets/brand/coreui.svg#full"></use>
                </svg>
            </a>
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
        <p>Contenido</p>
    </div>
    <footer class="footer">
        <Footer />
    </footer>
</div>
</template>

<script>
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

    },
}
</script>
