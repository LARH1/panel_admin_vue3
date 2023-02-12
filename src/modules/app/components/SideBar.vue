<template>
<li class="nav-item">
    <a class="nav-link" href="index.html">
        <i class="fa-solid fa-gauge-high nav-icon"></i>
        Dashboard<span class="badge badge-sm bg-info ms-auto">NEW</span>
    </a>
</li>
<li class="nav-title">Theme</li>
<li class="nav-item">
    <a class="nav-link" href="">
        <i class="fa-solid fa-droplet nav-icon"></i>
        Colors
    </a>
</li>
<li class="nav-item">
    <a class="nav-link" href="typography.html">
        <i class="fa-solid fa-pen nav-icon"></i>
        Typography
    </a>
</li>
<li class="nav-title">Components</li>
<li class="nav-group">
    <a class="nav-link nav-group-toggle" href="#">
        <i class="fa-solid fa-puzzle-piece nav-icon"></i>
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
        <i class="fa-solid fa-star nav-icon"></i>
        Icons
    </a>
    <ul class="nav-group-items">
        <li class="nav-item"><a class="nav-link" href="icons/coreui-icons-free.html"> CoreUI Icons<span class="badge badge-sm bg-success ms-auto">Free</span></a></li>
        <li class="nav-item"><a class="nav-link" href="icons/coreui-icons-brand.html"> CoreUI Icons - Brand</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="widgets.html">
        <i class="fa-solid fa-square-root-variable nav-icon"></i>
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
