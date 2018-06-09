<!--

## Login.vue

로그인 페이지

-->


<template>
  <div class="Login">
    <input type="text" v-model="userid">
    <input type="password" v-model="password">
    <button v-on:click="Login()">로그인</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userid: "",
      password: ""
    }
  },
  methods: {
    Login() {
      this.$http.post(`http://localhost:3000/users/login`, {
        userid: this.userid,
        password: this.password
      })
      .then(res => {
        alert('로그인 성공');
        this.$session.start();
        this.$session.set("_id", res.data._id);
        this.$session.set("name", res.data.name);
        this.$router.push('/');
      })
      .catch(err => {
        alert('로그인 실패');
      });

      this.userid = "";
      this.password = "";
    }
  }
}
</script>

<style lang="scss" scoped>
</style>