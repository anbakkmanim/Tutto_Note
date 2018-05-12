<template>
  <div id="app">
      <input type="text" placeholder="제목">
  </div>
</template>

<script>
  import axios from 'axios';
  
export default {
  name: 'app',
  data () {
    return {
      user: {}
    }
  }, 
  methods: {
    getdata: function () {
      axios.get('http://localhost:3000/users/1234')
      .then((res) => {
        this.user = res.data;
      });
  },
}
}
</script>

<style>

</style>