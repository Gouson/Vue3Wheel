<template>
  <div>
    <Switch v-model:value="y" />
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from 'vue';
export default {
  components: { Switch },
  setup() {
      const y=ref(true)
      return {y}
  }
};
</script>
<style>
</style>