<template>

<div id="app">
    <div class="menu">
        <img src="../assets/logo.png" id="logo">
        <h1>TuttoNote</h1>
          <div style="float:left; width:10cm" class="nav">
            <ul class="nav-list">
             <li class="nav-item">홈</li>
              <li class="nav-item">검색</li>
              <li class="nav-item">캘린더</li>
             </ul>
          </div>
          <div style="float:left; width:10cm" class="nav">
            <ul class="nav-list">
            <li class="nav-item">휴지통</li>
            <li class="nav-item">메모작성</li>
          </ul>
        </div>
    </div>

    <hr width=2 align=left float=left>

    <div id="home">
      <p style="font-size:30pt;">Home</p>
      <p style="text-align:right; font-size:20pt;">~님의노트</p>
      <div class="tabWrap">
        <ul class="tab_Menu">
          <li class="tabMenu current" >
            <a href="#tabContent01" style="color:red;" >최근</a>
          </li>
          <li class="tabMenu current">
            <a href="#tabContent02">미분류</a>
          </li>
        </ul>
        <div class="tab_Content_Wrap">
          <div v-if="false" id="tabContent01" class="tabPage">
            <p id="not">노트가 존재하지 않습니다.</p>
          </div>
          <div v-if="true" class="tabPage">
            <ul>
              <li v-for="post in posts" :key="post" id="check">
                <input type="checkbox" name="_id" style="margin-top:0.5cm">
                <label for ="checkbox" style="font-size:15pt; margin-left:10pt">{{post.title}}</label>
                <p style="margin-left:28pt">dfssdfd</p>
                <hr>
             </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
}
</script>

<style scoped>
.menu{
  float:left;
  padding-right: 5px;
  width:10cm
}
h1{
    color:blue;
    text-align: center;
    float: left;
    padding-top: 15px;
    font-family: "Bahnschrift";
}
#logo{
    width:3cm;
    float: left;
    padding-left: 70px;
}
.nav {
  margin-top: 2cm;
  float: left;
  width: 3cm;
  
  color:darkgray;
  margin-right: 50px;
  
}
.nav-list {
  list-style: none;
  margin: 0;
  padding: 10px 0;
  
  
}
.nav-item{
  text-align: center;
  padding: 20px;
  font-size:20pt;
  transition:all 0.3s;
  font-family: "조선일보명조", sans-serif;
}
.nav-item:hover{
  
  color:#504f4f;
  cursor: pointer; 
  background-color: darkgray;
}
#home{
  float: left;
  margin-left: 2.5CM;
}
.tabWrap { width: 900px; height: 500px; }
    .tab_Menu { margin: 0px; padding: 0px; list-style: none; }
    .tabMenu { width: 150px; margin: 0px; text-align: center;
               padding-top: 10px; padding-bottom: 10px; float: left; }
        .tabMenu a { color: #000000; font-weight: bold; text-decoration: none; }
    .current { background-color: #FFFFFF;
                }
    .tabPage { width: 900px; height: 470px; float: left;  margin-top: 30pt;}
               #not{
                 text-align: center ;font-size: 30pt;
                 vertical-align: middle ;  
                 font-family: "바탕";
               }
#check{
  list-style: none;
}

</style>