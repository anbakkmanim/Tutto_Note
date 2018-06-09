<!--

## Home.vue

가장 처음 시작했을 때 마주할 페이지

-->


<template>
  <div class="Home">
    <Sidebar class="sidebar" />
    <router-view class="content"></router-view>
    <!--<List class="content"/>-->
  </div>
</template>

<script>

import Sidebar from "./Sidebar";
import List from "./List";

export default {
  name: 'Home',
  components: { Sidebar, List },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: 20em;
  height: 100%;
  border-right: 1px solid #dddddd;
}
.content {
  margin-left: 20em;
  padding: 2em;
}

</style>
