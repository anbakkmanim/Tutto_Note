<!--

## Child1.vue

딸려오는 놈 1

-->


<template>
  <div class="Child1">
    Child1 Component
    <br>
    <router-link to="/child2">To Child2 Component</router-link>
    <br>
    <router-link to="/child3">To Child3 Component</router-link>
    <br>
    <router-link to="/">To Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
