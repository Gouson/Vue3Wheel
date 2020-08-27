<template>
<div>
    <div>实例1</div>
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visiable="x" :closeOnClickOverlay="true" :ok='f1' :cancel='f2' />
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
    ref
} from "vue";
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {
            return false
        }
        const f2 = () => {
            return true
        }
        return {
            x,
            toggle,
            f1,
            f2
        };
    },
};
</script>

<style>
</style>
