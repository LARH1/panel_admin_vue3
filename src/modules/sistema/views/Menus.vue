<!-- Menus del sistema -->
<template>
<div class="card mb-4">
    <div class="card-header">
        <span class="fw-bold">Menus</span>
        <a class="float-end btn btn-sm btn-dark" @click="openModal()">
            <i class="fa-solid fa-plus"></i> Agregar
        </a>
    </div>
    <div class="card-body">
        <table class="table rounded table-responsive">
            <thead class="bg-dark text-white">
                <tr>
                    <th>Acciones</th>
                    <th>Grupo</th>
                    <th>Nombre</th>
                    <th>Submenu</th>
                    <th>Icono</th>
                    <th>Ruta</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="m,i in allMenus">
                    <td>
                        <actions>
                            <template #actions>
                                <button type="button" class="dropdown-item" @click="openModal(m)">
                                    <i class="fa-solid fa-edit"></i>Actualizar</button>
                                <button type="button" class="dropdown-item" @click="deleteMenu(m.id)">
                                    <i class="fa-solid fa-times"></i>Eliminar</button>
                            </template>
                        </actions>
                    </td>
                    <td>{{m.group}}</td>
                    <td>{{m.name}}</td>
                    <td>{{m.submenu}}</td>
                    <td><i :class="m.icon"></i></td>
                    <td>{{m.path}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<modal ref="modalMenu" :showCloseButton="true">
    <template #modal-title>
        <p>{{titleModal}} </p>
    </template>
    <template #modal-body>
        <form>
            <div class="row mb-3">
                <label for="cmbGroup" class="col-md-2 col-form-label">Grupo</label>
                <div class="col-md-4">
                    <select id="cmbGroup" class="form-select" v-model="menu.group">
                        <!-- Cambiar por .id cuando se obtiene de DB -->
                        <!-- <option :key="i" v-for="(o,i) in allGroups" :value="o.id"> -->
                        <option :key="i" v-for="(o,i) in allGroups" :value="o.name">
                            {{o.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label for="txtName" class="col-md-2 col-form-label">Nombre</label>
                <div class="col-md-4">
                    <input type="text" v-model="menu.name" class="form-control" id="txtName">
                </div>
                <label for="txtIcon" class="col-md-1 col-form-label">Icono</label>
                <div class="col-md-3">
                    <input id="txtIcon" class="form-control" v-model="menu.icon" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="txtName" class="col-md-2 col-form-label">Tipo</label>
                <div class="col-md-4">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="rdnMenu" class="custom-control-input" v-model="menu.type" value="1">
                        <label class="custom-control-label ms-1" for="rdnMenu">Menú</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="rdnSubmenu" class="custom-control-input" v-model="menu.type" value="2">
                        <label class="custom-control-label ms-1" for="rdnSubmenu">Submenú</label>
                    </div>
                </div>
                <label for="txtIcon" class="col-md-1 col-form-label">Ruta</label>
                <div class="col-md-4">
                    <input id="txtIcon" class="form-control" v-model="menu.path" />
                </div>
            </div>
            <div class="row mb-3" v-if="menu.type==2">
                <label for="txtName" class="col-md-2 col-form-label">Menú</label>
                <div class="col-md-4">
                    <select id="cmbGroup" class="form-select" v-model="menu.parent">
                        <!-- Cambiar por .id cuando se obtiene de DB -->
                        <!-- <option :key="i" v-for="(m,i) in onlyMenus" :value="m.id"> -->
                        <option :key="i" v-for="(m,i) in onlyMenus" :value="m.name">
                            {{m.name}}
                        </option>
                    </select>
                </div>
            </div>
        </form>
    </template>
    <template #modal-footer>
        <button @click="saveMenu" type="button" class="btn btn-primary">{{actionName}}</button>
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
    name: "sistema-menus",
    components:
    {
        "modal": defineAsyncComponent(() => import("@/modules/app/components/shared/Modal.vue")),
        "actions": defineAsyncComponent(() => import("@/modules/app/components/shared/ActionsButton.vue")),
    },
    setup()
    {
        const store = useStore()
        const action = ref(1)
        const modalMenu = ref()
        const allMenus = ref([])
        const titleModal = ref("")
        const menu = ref(
        {
            id: 0,
            name: "",
            group: "",
            icon: "",
            type: 1,
            path: "",
            parent: "",
        })
        const getMenus = () =>
        {
            allMenus.value = store.getters["sistema/getAllMenus"]
        }
        const actionName = computed(() => action.value == 1 ? "Registrar" : "Actualizar")
        getMenus()
        return {
            actionName,
            menu,
            modalMenu,
            allMenus,
            titleModal,
            allGroups: store.getters["sistema/getAllGroups"],
            onlyMenus: store.getters["sistema/getOnlyMenus"],
            openModal: (model) =>
            {
                if (model) // Actualización
                {
                    action.value = 2
                    titleModal.value = "Actualizar menú"
                    menu.value = {
                        ...model
                    }
                }
                else // Nuevo
                {
                    action.value = 1
                    titleModal.value = "Registrar menú"
                }
                modalMenu.value.openModal()
            },
            saveMenu: async () =>
            {
                if (action.value == 1) // Registrar
                {
                    const res = await store.dispatch("sistema/createMenu", menu.value)
                    if (res.status)
                    {
                        alert("Guardado correctamente")
                        menu.value = {}
                        modalMenu.value.closeModal()
                        getMenus()
                    }
                    else
                    {
                        alert(res.ms)
                    }
                }
                else // Actualizar
                {
                    const res = await store.dispatch("sistema/updateMenu", menu.value)
                    if (res.status)
                    {
                        alert("Actualizado correctamente")
                        menu.value = {}
                        modalMenu.value.closeModal()
                        getMenus()
                    }
                    else
                    {
                        alert(res.ms)
                    }
                }
            },
            deleteMenu: async (id) =>
            {
                const conf = confirm("¿Eliminar el menú seleccionado?");

                if (conf)
                {
                    const res = await store.dispatch("sistema/deleteMenu", id)
                    if (res.status)
                    {
                        alert("Eliminado correctamente")
                        getMenus()
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
