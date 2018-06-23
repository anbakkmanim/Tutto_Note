<template>
  <div class="Search">
    <div class="SearchBar">
      <input placeholder="검색어를 입력하세요" v-model="searchWord" name="searchWord">
      <button v-on:click="searchData()">검색</button>
      최근 검색어 : {{searchWords}}
    </div>
    <div class="Option">
      <select name="Option" id="option">
        <option value="Title">제목으로 검색</option>
        <option value="Tag">태그으로 검색</option>
        <option value="Plan">일정으로 검색</option>
      </select>
    </div>
    <div class="Array">
      <input type="radio" value="최신순"  name="array"> 최신순
      <input type="radio" value="생성순"  name="array"> 생성순
      <input type="radio" value="제목순"  name="array"> 제목순
    </div>
    
    <div class="NoteList">

    <ul>
      <router-link :to="'/note/' + note._id" v-for="(note, index) in notes" :key="index" tag="li">
        
        <label>{{note.title}}</label>
        <p>{{note.content}}</p>
         <hr>
      </router-link>
    </ul>
  </div> 
  </div>
</template>
<script>
export default {
  name: 'Search',
  data(){
    return{
      searchWord: '',
      notes: [],
      searchWords: ''
    }
  },
  created() {
    this.$http.get(`http://localhost:3000/note/author/` + this.$session.get("_id"))
    .then(res => {
      console.log(this.$session.get("_id"));
      this.notes = res.data;
    })
  },
  methods: {
    searchData() {
      this.$http.get(`http://localhost:3000/note/search/title?title=${this.searchWord}&_id=${this.$session.get('_id')}`)
      .then(res => {
        this.notes = res.data;
      })
      .catch(err => {
        console.err(err);
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>
  .SearchBar,
  .Option{
    display: inline;
    font-size: 25px;
  }

  .Option select{
    font-size: 25px;
    margin: 8px auto;
    height: 35px
  }

  .SearchBar input{
    width: 400px;
    height: 35px;
    font-size: 22px;
    
  }

  .SearchBar button{
    height: 35px;
    width: 100px;
    font-size: 22px;
    margin: 6px
  }

  .Array{
    font-size: 25 px;
    margin: 7px;
  }
// Variables
$border-color: #bdc3c7;

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


</style>

