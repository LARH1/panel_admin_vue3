<template>
<li class="nav-item dropdown">
    <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <div class="avatar avatar-md"><img class="avatar-img" src="assets/img/avatars/8.jpg" alt="user@email.com"></div>
    </a>
    <div class="dropdown-menu dropdown-menu-end pt-0">
        <div class="dropdown-header bg-light py-2">
            <div class="fw-semibold">Cuenta</div>
        </div>
        <a class="dropdown-item" href="#">
            <i class="fa-regular fa-bell"></i>
            Notificaciones<span class="badge badge-sm bg-info ms-2">42</span>
        </a>
        <div class="dropdown-header bg-light py-2">
            <div class="fw-semibold">Ajustes</div>
        </div>
        <a class="dropdown-item" href="#">
            <i class="fa-regular fa-user"></i>
            Perfil
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item cursor-pointer" @click="onLogOut">
            <i class="fa-solid fa-lock"></i>
            Salir
        </a>
    </div>
</li>
</template>

<script>
import
{
    useRouter
}
from 'vue-router';
import { useStore } from 'vuex';
export default
{
    name: "app-general-actions",
    setup()
    {
        const store=useStore()
        const router = useRouter()
        return {
            onLogOut: () =>
            {
                // Salir
                router.push(
                {
                    name: "auth-login"
                });
                // Limpiar datos del store aqui

                store.commit("auth/logOut");
            }
        }
    },
}
</script>
