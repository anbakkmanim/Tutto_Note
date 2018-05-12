<template>
    <div id="app">
        <input v-model="userid" placeholder="아이디"><br>
        <input v-model="name" placeholder="이름"><br>
        <input v-model="password" placeholder="비밀번호"><br><br> 
        <button v-on:click="getdata">가입</button>
    </div>
</template>

<script>
  import axios from 'axios';
  
export default {
  name: 'app',
  data () {
    return {
      userid:"",
      name:"",
      password:""
    }
  }, 
  methods: {
    getdata: function () {
      alert(this.name + " ~ 가입완료");
      axios.post('http://localhost:3000/users',{
          params : {
            userid : this.userid,
            name : this.name,
            password : this.password
          }
      })
  },
}
}
</script>
