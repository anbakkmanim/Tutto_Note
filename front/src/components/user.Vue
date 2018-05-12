<template>
  <div id="app">
    <ul>
      <li v-for="post in posts" :key="post">
        {{post.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  
export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.posts = res.data;
      });
  },
  methods: {
  },
}
</script>

<style>

</style>