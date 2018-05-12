<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <!<router-view/>-->
    <user />
  </div>
</template>

<script>

import home from '@/components/home'

export default {
  name: 'App',
  components: {
   'user': home,
  },
  
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.menu{
  
}
</style>
