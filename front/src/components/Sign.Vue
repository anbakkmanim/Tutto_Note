<template>
    <div id="app">
        <div class="sign">
            <button v-on:click="join()">로그인</button><br>
        </div>
        <div class="from">
            <h1 >{{msg}}</h1>
            <input type="name" placeholder="이름" v-model="name"><br>
            <input type="text" placeholder="아이디" v-model="userid" ><br>
            <input type="password" placeholder="비밀번호" v-model="password"><br>
            <button  v-on:click="sign()">회원가입</button><br>
            
        </div>
        <!--
        <ul v-for="user in users" :key="user">
            <li>
                {{user.id}} <br>
                {{user.title}}
            </li>
        </ul>
        -->
    </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'Sign',
  /*
  created() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
          this.users = res.data;
      });
  },
  */
  data () {
      return {
          msg: "회원가입",
          userid: "",
          password: "",
          name: "",
          //users: [],
          result: -1
      }
  },
  methods: {
      /**
      sign() {
          let baseURI = `http://localhost:3000`
          axios.post(baseURI + '/user', {
              userid: this.userid,
              password: this.password
          })
          .then((res) => {
              console.log(res);
          })
      }
       */
      /*
      sign() {
          axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(res => console.log(res));
      }
      */
     sign() {
        //  this.result=res.data.result;
     }
  }
}
</script>
<style>
template{
    width: 100%;
    height: 100%;
    background-color: #7d52bd;
    padding: 8% 0 0;
    margin: auto;
}
h1{
    font-family: NanumGothic
}
@font-face {
    font-family: NanumGothic;
    src: url(assets/NanumGothic.ttf) format('truetype');
}
#app{
    width: 100%;
    height: 100%;
    background-color: #7d52bd;
    padding: 8% 0 0;
    margin: auto;
}
/* .sign{
    
} */
.sign button{
    right: 15%;
    font-family: NanumGothic;
    text-transform: uppercase;
    outline: 0;
    background-color: #5A2D8A;
    width: 150px;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

}
.from{
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.from input{
    font-family: NanumGothic;
    outline: 0;
    background-color: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.from button{
    font-family: NanumGothic;
    text-transform: uppercase;
    outline: 0;
    background-color: #5A2D8A;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}
</style>

