<template>
  <div class="ListDetail">
    <br><br>
    <input type="text" placeholder="제목" size="90%" v-model="title"> <br> <br>
    <input type="date" name="start_date" v-model="start_date">
    <span> ~ </span>
    <input type="date" name="end_date" v-model="end_date"> <br><br>
    <textarea v-model="content" rows="18" placeholder="메모"/><br><br>

    <textarea name="tags"  rows="2" placeholder="#태그"></textarea><br><br>
    
    <!--<input type="button" name="input" value="확인"> -->
    <button v-on:click="submit()">확인</button>
    <router-link to="/" tag="button" v-on:click="remove()">삭제</router-link>
    <router-link to="/" tag="button">취소</router-link>
  </div>
</template>

<script> 


export default {



  name: 'ListDetail',
  data(){
    return{
      title: "",
      start_date: "",
      end_date: "",
      content: ""
    }
  },

  created() {
    console.log();
    if (this.$route.params._id) {
      this.$http.get("http://localhost:3000/note/" + this.$route.params._id)
      .then(res => {
        this.title = res.data.title;
        this.content = res.data.content;
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
          author: '5b1b6c4087145c6624a7d131'
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
    },
    remove(){
      this.$http.delete("http://localhost:3000/note/" + this.$route.params._id)
      .then(res => {

      })
      .catch(err => {

      });
    }

  }
  
  
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
</style>
