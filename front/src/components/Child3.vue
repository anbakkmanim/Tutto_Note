<!--

## Child3.vue

딸려오는 놈 3

-->


<template>
  <div class="Child3">
    Child3 Component
    <br>
    <router-link to="/child1">To Child1 Component</router-link>
    <br>
    <router-link to="/child2">To Child2 Component</router-link>
    <br>
    <router-link to="/">To Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Child3',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
