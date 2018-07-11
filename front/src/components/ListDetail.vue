<template>

  <div class="ListDetail">
    <Sidebar class="sidebar" />
    <br><br>
    <div class="content">
    <input type="text" placeholder="제목" size="90%" v-model="title"> <br> <br>
    <input type="date" name="start_date" v-model="start_date">
    <span> ~ </span>
    <input type="date" name="end_date" v-model="end_date"> <br><br>
    <textarea v-model="content" rows="18" placeholder="메모"/><br><br>

    <input type="text" v-model="t" placeholder="#태그" id="tag"><button v-on:click="add()" style="width:60px; margin-left:20px;">추가</button>
    <ul>
       <li v-for="(tag, i) in tags" :key="i">
        {{tag}} <a v-on:click="delet(i)">X</a>
      </li>
    </ul>
    <br>

    <!-- <textarea name="tags"  rows="2" placeholder="#태그"></textarea><br><br> -->

    <!-- <vue-editor v-model="content"></vue-editor>
    <quill-editor v-model="content"></quill-editor> -->
    <!--<input type="button" name="input" value="확인"> -->
    <button v-on:click="submit()">확인</button>
    <button v-on:click="remove()">삭제</button>
    <router-link to="/" tag="button">취소</router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {

   name: 'ListDetail',
  data(){
    return{
      title: "",
      start_date: "",
      end_date: "",
      content: "",
      t:'',
      tags:[]
    }
  },

  created() {
    if (this.$route.params._id) {
      this.$http.get("http://localhost:3000/note/" + this.$route.params._id)
      .then(res => {
        this.title = res.data.title;
        this.content = res.data.content;
        this.start_date=res.data.start_date.substring(0,10);
        this.end_date=res.data.end_date.substring(0,10);
        this.tags = res.data.tags;
      })
      .catch(err => {

      });
    }
  },

  methods: {
    submit(){
      if (this.$route.params._id) {
        this.$http.put("http://localhost:3000/note/" + this.$route.params._id, {
          title: this.title,
          content: this.content,
          start_date: this.start_date,
          end_date: this.end_date,
          tags:this.tags
        }).then(res => {
          console.log(res);
          alert("글 작성 성공");
          this.$router.push({path: '/'});
        })
        .catch(err => {
          console.log(err);
          alert("글작성 실패");
        });
      }
      else {
        this.$http.post("http://localhost:3000/note", {
          title: this.title,
          content: this.content,
          start_date: this.start_date,
          end_date: this.end_date,
          author: this.$session.get("_id"),
          tags : this.tags
        }).then(res => {
          alert("글 작성 성공");
          this.$router.push({path: '/'});
        })
        .catch(err => {
          alert("글작성 실패");
        });
      }
    },
    remove(){
      this.$http.put("http://localhost:3000/note/" + this.$route.params._id, {
        enable: false
      })
      .then(res => {
        alert('휴지통ㅂㅂ');
        this.$router.push({path: '/'});
      })
      .catch(err => {
        console.log(err);
        alert('글작성 실패');
      });
    },
    add(){
      this.tags.push(this.t);
      this.t = '';
    },
    delet(i) {
      this.tags.splice(i, 1);
    }
  },
  components:{
    Sidebar,
  },
  
  
}
</script>

<style>

.ListDetail{
  text-align: center;
  font-family: "NanumGothic"
}
span{
  font-size: 25px
}
textarea{
  width: 100%;
  height: 80%;
  resize: none;
  font-size: 25px;
  font-family: "NanumGothic"
}
#tag{
  width:100px;
  font-size:15pt;
  
}
input[type=date]{ 
  width: 48.8%;
  font-size: 25px;
  font-family: "NanumGothic"
}
input[type=text]{
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-family: "NanumGothic"
}
input[type=button]{
  width: 30%;
  height: 50px;
  font-size: 20px;
  font-family: "NanumGothic"
}
button{
    width: 30%;
  height: 50px;
  font-size: 20px;
  font-family: "NanumGothic"
}
.content {
  margin-left: 20em;
  padding: 2em;
}


</style>
