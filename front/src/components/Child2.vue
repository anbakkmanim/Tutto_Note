<!--

## Child1.vue

딸려오는 놈 2

-->


<template>
  <div class="Child2">
    Child2 Component
    <br>
    <router-link to="/child1">To Child1 Component</router-link>
    <br>
    <router-link to="/child3">To Child3 Component</router-link>
    <br>
    <router-link to="/">To Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
