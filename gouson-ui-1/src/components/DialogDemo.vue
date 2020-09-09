<template>
<div>
    <div>示例1</div>
    <Button @click="toggle">Toggle</Button>
     <!-- eslint-disable-line vue/no-v-model-argument -->
    <Dialog v-model:visiable="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
        
        <template v-slot:content>
            <h1>h1</h1>
            <h2>h2</h2>
        </template>
        <template v-slot:title>
            <Strong>加粗的标题</Strong>
        </template>
    </Dialog>

    <div>示例2</div>
    <Button @click="showDialog">show</Button>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
    ref
} from "vue";
import {
    openDialog
}
from "../lib/openDialog";
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
            return false;
        };
        const f2 = () => {
            return true;
        };
        const showDialog = () => {
            console.log(1)
            openDialog({
                title: '标题1',
                content: '你好1',
                ok: () => {
                    console.log('ok')
                },
                cancel: () => {
                    console.log('cancel')
                }
            })
        }
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog
        };
    },
};
</script>
<style>
</style>
