<template>
  <div>
    <p style="font-size:22pt;">HOME</p>
    <ul>
      <router-link :to="'/note/' + note._id" v-for="(note, index) in notes" :key="index" tag="li">
        <input type="checkbox" v-bind:value="note.title" v-model="notelist">
        <label>{{note.title}}</label>
        <p>{{note.content}}</p>
         <hr>
      </router-link>
    </ul>
    <div v-if="notelist.length > 0" class="select">
      <div>
        <input type="checkbox" v-model="allselect" id="a1b2c3" @click="selectAll">
        <label for="a1b2c3">{{notelist.length}} 개 선택</label>
      </div>
      <div class="button">수정</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      notes: [],
      checknote: [],
      notelist : [],
      noteid: ""
    }
  },
  created() {
    this.$http.get(`http://localhost:3000/note/author/` + this.$session.get("_id"))
    .then(res => {
      console.log(this.$session.get("_id"));
      this.notes = res.data;
    })
  },
  computed: {
    noteUrl(_id) {
      return `http://localhost:3000/note/` + _id;
    }
  },
  methods:{
    selectAll: function() {
      for (note in this.notes) {
        this.notelist = true;              
      }
    },
  }
}
</script>

<style lang="scss" scoped>

ul {
  li{
    list-style: none;
    padding-left: 30px;
    padding-top: 30px;
    
  }
}
label{
  font-size: 18pt;
  padding: 20px;
}
p{
  font-size: 13pt;
  padding: 18px 60px;
}
a{
  text-decoration: none;
  color: black;
}

.select {
  position: fixed;
  width: 100%;
  height: 8em;
  bottom: 0;
  left: 20em;
  background-color: #fff;
  border: 1px solid #dddddd;
  div.button {
    display: inline-block;
    padding: 0.4em;
    background-color: #F2D398;
    border-radius: 0.2em;
  }
  div{
    float: left;
    padding: 50px;
  }
}
</style>
