<template>
  <div class="ListDetail">
    <br><br>
    <input type="text" placeholder="제목" size="90%" name="title"> <br> <br>
    <input type="date" name="firstDate"><span> ~ </span><input type="date" name="lastDate"> <br><br>
    <textarea name="story" rows="10" placeholder="메모"/><br>
    <textarea name="tags"  rows="2" placeholder="#태그"></textarea>
    <input type="button" name="input" value="확인"> 
    <input type="button" name="delete" value="삭제">
    <input type="button" name="back" value="취소">
  </div>
</template>

<script>
export default {
  name: 'ListDetail',
  data(){
    return{
      title: "",
      firstDate: "",
      lastDate: "",
      story: ""
    }
  },
  created() {
    this.$http.get("")
    .then(res => {
      this.title = res.title;
    })
    .catch(err => {

    });
  },
  method: {
    submit(){
      this.$http.post("https://reares.in/api/", {
        title: this.title,
        date: this.date,
        story: this.story

      }).then(res => {
        alert("글 작성 성공");
      })
      .catch(err => {
        alert("글작성 실패");
      });
    },
    delete(){
      this.$http.delete()
      .then()
      .catch();
    }

  }
}
</script>

<style>

div{
  text-align: center;
  font-family: "NanumGothic"
}
span{
  font-size: 25px
}
textarea{
  width: 90%;
  min-height: 50%;
  resize: none;
  font-size: 25px;
  font-family: "NanumGothic"
}
input[type=date]{
  width: 43.5%;
  font-size: 25px;
  font-family: "NanumGothic"
}
input[type=text]{
  width: 90%;
  height: 50px;
  font-size: 25px;
  font-family: "NanumGothic"
}
input[type=button]{
  width: 30%;
  height: 50px;
  font-size: 25px;
  font-family: "NanumGothic"
}
</style>
