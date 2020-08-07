<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;

    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); //set
    router.afterEach((to, from) => {
      // to and from are both route objects.
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
