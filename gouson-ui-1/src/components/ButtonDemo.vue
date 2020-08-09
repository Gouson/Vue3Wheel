<template>
  <div>
    <p>Button 的文档</p>
    <h1>示例1</h1>
    <div>
      <Button>你好</Button>
    </div>
    <div>
      <Button theme="button">你好</Button>
    </div>
    <div>
      <Button theme="link">你好</Button>
    </div>
    <div>
      <Button theme="text">你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
<style>
</style>