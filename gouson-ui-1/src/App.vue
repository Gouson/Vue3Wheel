<template>
  <div>
    导航栏 | <router-link to="/">Frank1</router-link> | <router-link to="/2">Frank2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
 
}
</script>
