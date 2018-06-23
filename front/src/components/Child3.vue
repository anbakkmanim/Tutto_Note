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
    <ul class="tags">
      <li v-for="(tag, index) in tags" :key="index">
        {{ tag }}
        <a v-on:click="remove(index)">x</a>
      </li>
    </ul>
    <input type="text" v-model="input">
    <button v-on:click="add">태그추가</button>
    <router-link to="/">To Home</router-link>
    
  </div>
</template>

<script>

export default {
  name: 'Child3',
  data() {
  
    return {
      tags: [
        'hi',
        'hello',
        'haha',
        'hihi'
      ],
      input: ""
    }
  },
  methods: {
    add() {
      this.tags.push(this.input);
      this.input = "";
    },
    remove(index) {
      this.tags.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
.tags {
  li {
    display: inline-block;
    padding: 7px;
    margin-right: 3px;
    background-color: #eee;
  }
}
</style>
