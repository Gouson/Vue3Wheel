<template>
  <button @click="toggle" :class="{checked}">
    <span></span>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(true);
    // const toggle = () => {
    //   console.log(1);
    //   checked.value = !checked.value;
    //   console.log(checked);
    // };
    const toggle = () => {
      checked.value = !checked.value;
      console.log(checked);
      console.log(checked.value);
    };
    return { checked, toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2/2;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>