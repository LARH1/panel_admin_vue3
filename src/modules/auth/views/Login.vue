<template>
<div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card-group d-block d-md-flex row">
                    <div class="card col-md-7 p-4 mb-0">
                        <form class="card-body" @submit.prevent="onLogin">
                            <img src="assets/img/panel_admin_4.png" alt="Panel Admin" height="70">
                            <p class="text-medium-emphasis text-end">Ingresar</p>
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <input class="form-control" type="text" v-model="user.user" placeholder="Usuario" required>
                            </div>
                            <div class="input-group mb-4">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input class="form-control" type="password" v-model="user.password" placeholder="Contraseña" required>
                            </div>
                            <div class="row">
                                <div class="col-6"></div>
                                <div class="col-6 text-end">
                                    <button type="submit" class="btn bg-dark text-white px-4">Ingresar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card col-md-5 text-white bg-dark py-5">
                        <div class="card-body text-center">
                            <div>
                                <h2>Lorem</h2>
                                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import
{
    ref
}
from 'vue'
import
{
    useStore
}
from 'vuex'
import
{
    useRouter
}
from 'vue-router'
export default
{
    name: "auth-login",
    setup()
    {
        const store = useStore()
        const router = useRouter()
        const user = ref(
        {
            user: "admin",
            password: "123456"
        })
        return {
            user,
            onLogin: async () =>
            {
                const res = await store.dispatch("auth/loginUser", user.value)
                if (!res.success) alert(res.message)
                else
                {
                    alert("Ingreso correcto");
                    router.push("/home");
                }
            }
        }
    }
}
</script>

<style>

</style>
