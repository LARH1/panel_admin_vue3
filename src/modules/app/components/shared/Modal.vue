<template>
<div class="modal fade" :class="{'modal__modal_visible' : isVisible}" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <slot name="modal-title" />
                </h5>
                <button @click="closeModal" type="button" class="close modal__button-close" data-dismiss="modal" aria-label="Close">
                    <span class="fw-bold" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="modal-body" />
            </div>
            <div class="modal-footer">
                <slot name="modal-footer" />
                <button v-if="showCloseButton" @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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
export default
{
    props:
    {
        showCloseButton:
        {
            type: Boolean,
        }
    },
    name: "shared-modal",
    setup()
    {
        const isVisible = ref(false)
        return {
            isVisible,
            closeModal: () => isVisible.value = false,
            openModal: () => isVisible.value = true,
        }
    }
}
</script>

<style scoped>
.modal__button-close {
    background-color: transparent;
    border: 0;
    font-size: 22px;
    color: gray;
}

.modal__button-close:hover {
    color: rgb(56, 56, 56);
}

.modal-title {
    padding: 0;
    margin-bottom: -1rem;
    line-height: 1;
}
</style>
