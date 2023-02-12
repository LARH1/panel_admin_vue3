<template>
<li class="nav-item dropdown">
    <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <div class="avatar avatar-md"><img class="avatar-img" src="assets/img/avatars/8.jpg" alt="user@email.com"></div>
    </a>
    <div class="dropdown-menu dropdown-menu-end pt-0">
        <div class="dropdown-header bg-light py-2">
            <div class="fw-semibold">Account</div>
        </div>
        <a class="dropdown-item" href="#">
            <svg class="icon me-2">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
            </svg>
            Updates<span class="badge badge-sm bg-info ms-2">42</span>
        </a>
        <div class="dropdown-header bg-light py-2">
            <div class="fw-semibold">Settings</div>
        </div>
        <a class="dropdown-item" href="#">
            <svg class="icon me-2">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
            </svg>
            Profile
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
            <svg class="icon me-2">
                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
            </svg>
            Lock Account
        </a>
    </div>
</li>
</template>

<script>
export default
{
    name: "app-general-actions",
    setup()
    {

    },
}
</script>
