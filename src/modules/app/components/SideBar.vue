<template>
<li class="nav-item">
    <a class="nav-link" href="index.html">
        <i class="fa-solid fa-gauge-high nav-icon"></i>
        Dashboard<span class="badge badge-sm bg-info ms-auto">NEW</span>
    </a>
</li>
<template :key="i" v-for="(m,i) in menus">
    <li class="nav-title">{{m.name}}</li>
    <template :key="j" v-for="(s,j) in m.options">
        <!-- Single -->
        <li v-if="s.type==1" class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:s.path_name}">
                <i class="nav-icon" :class="s.icon"></i>{{s.name}}
            </router-link>
        </li>
        <!-- Multi -->
        <li class="nav-group" v-if="s.type==2">
            <a class="nav-link nav-group-toggle" href="#">
                <i class="nav-icon" :class="s.icon"></i>
                {{s.name}}
            </a>
            <ul class="nav-group-items">
                <li class="nav-item" :key="i" v-for="(sm,i) in s.options">
                    <router-link class="nav-link" :to="{name:sm.path_name}">
                        <span class="nav-icon"></span> {{sm.name}}
                    </router-link>
                </li>
            </ul>
        </li>
    </template>
</template>
</template>

<script>
export default
{
    name: "app-sidebar",
    setup()
    {
        const menus = [
        {
            name: "Sistema",
            options: [
            {
                name: "Menus",
                icon: "fa-solid fa-layer-group",
                path_name: "sistema-modulos",
                type: 1, // Single
            },
            {
                name: "Multi",
                icon: "fa-solid fa-check",
                path_name: "",
                type: 2, // Multi
                options: [
                {
                    name: "Sub 1",
                    icon: "fa-solid fa-layer-group",
                    path_name: "some-asd",
                },
                {
                    name: "Sub 2",
                    icon: "fa-solid fa-layer-group",
                    path_name: "some-asd",
                }, ]
            },
            {
                name: "Menu 2",
                icon: "fa-solid fa-users",
                path_name: "some-asd",
                type: 1, // Single
            },
            {
                name: "Menu 3",
                icon: "fa-solid fa-times",
                path_name: "some-asd",
                type: 1, // Single
            }, ]
        }, ]
        return {
            menus
        }
    }
}
</script>

<style>

</style>
