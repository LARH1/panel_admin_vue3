<template>
<div class="btn-group" role="group">
    <div class="btn-group dropup" role="group">
        <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i :class="icon"></i>
        </button>
        <div class="dropdown-menu">
            <slot name="actions" />
        </div>
    </div>
</div>
</template>

<script>
export default
{
    props:
    {
        icon:
        {
            type: String,
            default: "fa-solid fa-grip-horizontal"
        },
        length:
        {
            type: Number,
            default: 1,
        }
    },
    name: "shared-actions",
}
</script>

<style>

</style>
