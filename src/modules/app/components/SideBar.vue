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
            <a class="nav-link nav-group-toggle" @click.prevent="">
                <i class="nav-icon" :class="s.icon"></i>
                {{s.name}}
            </a>
            <ul class="nav-group-items">
                <li class="nav-item" :key="i" v-for="(sm,i) in s.options">
                    <router-link class="nav-link" :to="{name:sm.path_name}">
                        {{sm.name}}
                    </router-link>
                </li>
            </ul>
        </li>
    </template>
</template>
</template>

<script>
import useApp from "../composables/useApp";
export default
{
    name: "app-sidebar",
    setup()
    {
        const
        {
            menus
        } = useApp()
        return {
            menus
        }
    }
}
</script>

<style>

</style>
