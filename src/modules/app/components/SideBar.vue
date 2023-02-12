<template>
<li class="nav-item">
    <a class="nav-link" href="index.html">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
        </svg>
        Dashboard<span class="badge badge-sm bg-info ms-auto">NEW</span>
    </a>
</li>
<li class="nav-title">Theme</li>
<li class="nav-item">
    <a class="nav-link" href="">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-drop"></use>
        </svg>
        Colors
    </a>
</li>
<li class="nav-item">
    <a class="nav-link" href="typography.html">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-pencil"></use>
        </svg>
        Typography
    </a>
</li>
<li class="nav-title">Components</li>
<li class="nav-group">
    <a class="nav-link nav-group-toggle" href="#">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-puzzle"></use>
        </svg>
        Base
    </a>
    <ul class="nav-group-items">
        <li class="nav-item"><a class="nav-link" href="base/accordion.html"><span class="nav-icon"></span> Accordion</a></li>
        <li class="nav-item"><a class="nav-link" href="base/breadcrumb.html"><span class="nav-icon"></span> Breadcrumb</a></li>
        <li class="nav-item"><a class="nav-link" href="base/tooltips.html"><span class="nav-icon"></span> Tooltips</a></li>
    </ul>
</li>
<li class="nav-group">
    <a class="nav-link nav-group-toggle" href="#">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-star"></use>
        </svg>
        Icons
    </a>
    <ul class="nav-group-items">
        <li class="nav-item"><a class="nav-link" href="icons/coreui-icons-free.html"> CoreUI Icons<span class="badge badge-sm bg-success ms-auto">Free</span></a></li>
        <li class="nav-item"><a class="nav-link" href="icons/coreui-icons-brand.html"> CoreUI Icons - Brand</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="widgets.html">
        <svg class="nav-icon">
            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-calculator"></use>
        </svg>
        Widgets<span class="badge badge-sm bg-info ms-auto">NEW</span>
    </a>
</li>
</template>

<script>
export default
{
    name: "app-sidebar",
}
</script>

<style>

</style>
