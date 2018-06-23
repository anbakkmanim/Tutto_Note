<template>
  <div class="Sidebar">
    <img src="../assets/tutologo.png" alt="">
    <p>TuttoNote</p>
    <div class="menu">
      <li id="user"><span>{{userName}}</span></li>
      <ul>
        <router-link to="/" tag="li">홈</router-link>
        <router-link to="/search" tag="li">검색</router-link>
        <li>캘린더</li>
      </ul>
      <ul style="padding-top:120px;">
        <li>휴지통</li>
        <router-link to="/listdetail" tag="li">메모작성</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   name: 'sidebar',
  data() {
    return {
      id: "",
    }
  },
  created(){
    this.id = "채단비";
  },
  computed: {
    userName() {
      return this.$session.get("name");
    }
  }
}
</script>



<style lang="scss" scoped>

img{
  width: 7em;
  float: left;
  padding: 50px 20px;
}
p{
 padding: 100px 155px 90px;
 font-family: "NanumSquare";
 font-size: 19pt;
}
ul li{  
  padding: 30px;
  text-align: center;
}
#user{
  
  list-style-image: url('../assets/user.png');
  background-color: white;
  transition: 0s;
  padding: 0px 60px 50px;
  font-size: 15pt;
}
li:hover{
  background-color: #e7e6e1;
  transition: 0.5s;
}
span{
  font-size: 20pt;
  color: #409d9b;
}
</style>
