<template>
<div class="card mb-4">
    <div class="card-header">
        <span class="fw-bold">Usuarios</span>
        <a class="float-end btn btn-sm btn-dark" @click="openModal()">
            <i class="fa-solid fa-plus"></i> Agregar
        </a>
    </div>
    <div class="card-body">
        <table class="table rounded table-responsive">
            <thead class="bg-dark text-white">
                <tr>
                    <th>Acciones</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="u,i in allUsers">
                    <td>
                        <actions>
                            <template #actions>
                                <button type="button" class="dropdown-item" @click="openModal(u)">
                                    <i class="fa-solid fa-edit"></i>Actualizar</button>
                                <button type="button" class="dropdown-item" @click="deleteUser(u.id)">
                                    <i class="fa-solid fa-times"></i>Eliminar</button>
                            </template>
                        </actions>
                    </td>
                    <td>{{u.full_name}}</td>
                    <td>{{u.user_name}}</td>
                    <td>{{u.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<modal ref="modalUser" :showCloseButton="true">
    <template #modal-title>
        <p>{{titleModal}} </p>
    </template>
    <template #modal-body>
        <form>
            <div class="row mb-3">
                <label for="txtFullName" class="col-md-2 col-form-label">Nombre</label>
                <div class="col-md-5">
                    <input type="text" v-model="user.full_name" class="form-control" id="txtFullName">
                </div>
            </div>
            <div class="row mb-3">
                <label for="txtUserName" class="col-md-2 col-form-label">Usuario</label>
                <div class="col-md-4">
                    <input type="text" v-model="user.user_name" class="form-control" id="txtUserName">
                </div>
                <label for="txtPassword" class="col-md-2 col-form-label me-1">Contraseña</label>
                <div class="col-md-3">
                    <input id="txtPassword" type="password" class="form-control" v-model="user.password" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="txtEmail" class="col-md-2 col-form-label">Correo</label>
                <div class="col-md-4">
                    <input type="email" id="txtEmail" v-model="user.email" class="form-control">
                </div>
            </div>
        </form>
    </template>
    <template #modal-footer>
        <button @click="saveUser" type="button" class="btn btn-primary">{{actionName}}</button>
    </template>

</modal>
</template>

<script>
import
{
    computed,
    defineAsyncComponent,
    ref,
}
from 'vue';
import
{
    useStore
}
from 'vuex'

export default
{
    name: "sistema-usuarios",
    components:
    {
        "modal": defineAsyncComponent(() => import("@/modules/app/components/shared/Modal.vue")),
        "actions": defineAsyncComponent(() => import("@/modules/app/components/shared/ActionsButton.vue")),
    },
    setup()
    {
        const store = useStore()
        const action = ref(1)
        const modalUser = ref()
        const allUsers = ref([])
        const titleModal = ref("")
        const user = ref(
        {
            id: 0,
            full_name: "",
            user_name: "",
            password: "",
            email: "",
        })
        const getUsers = () =>
        {
            allUsers.value = store.getters["sistema/getAllUsers"]
        }
        const actionName = computed(() => action.value == 1 ? "Registrar" : "Actualizar")
        getUsers()
        return {
            actionName,
            user,
            modalUser,
            allUsers,
            titleModal,
            openModal: (model) =>
            {
                if (model) // Actualización
                {
                    action.value = 2
                    titleModal.value = "Actualizar Usuario"
                    user.value = {
                        ...model
                    }
                }
                else // Nuevo
                {
                    action.value = 1
                    titleModal.value = "Registrar Usuario"
                }
                modalUser.value.openModal()
            },
            saveUser: async () =>
            {
                if (action.value == 1) // Registrar
                {
                    const res = await store.dispatch("sistema/createUser", user.value)
                    if (res.status)
                    {
                        alert("Guardado correctamente")
                        user.value = {}
                        modalUser.value.closeModal()
                        getUsers()
                    }
                    else
                    {
                        alert(res.ms)
                    }
                }
                else // Actualizar
                {
                    const res = await store.dispatch("sistema/updateUser", user.value)
                    if (res.status)
                    {
                        alert("Actualizado correctamente")
                        user.value = {}
                        modalUser.value.closeModal()
                        getUsers()
                    }
                    else
                    {
                        alert(res.ms)
                    }
                }
            },
            deleteUser: async (id) =>
            {
                const conf = confirm("¿Eliminar el usuario seleccionado?");

                if (conf)
                {
                    const res = await store.dispatch("sistema/deleteUser", id)
                    if (res.status)
                    {
                        alert("Eliminado correctamente")
                        getUsers()
                    }
                    else
                    {
                        alert(res.ms)
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
