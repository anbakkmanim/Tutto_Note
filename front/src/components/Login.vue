<!--

## Login.vue

로그인 페이지

-->


<template>
  <div class="Login">
    <input type="text" v-model="id">
    <input type="password" v-model="password">
    <button v-on:click="Login()">로그인</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: "",
      password: ""
    }
  },
  methods: {
    Login() {
      this.$http.post(`https://reqres.in/api/login`, {
        email: this.id,
        password: this.password
      })
      .then(res => {
        alert('로그인 성공');
      })
      .catch(err => {
        alert('로그인 실패');
      });

      this.id = "";
      this.password = "";
    }
  }
}
</script>

<style lang="scss" scoped>
</style>