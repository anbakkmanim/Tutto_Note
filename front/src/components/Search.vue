<template>
  <div class="Search">
    <div class="Option">
      <select v-model="Option">
        <option value="Title" selected>제목으로 검색</option>
        <option value="Tag">태그로 검색</option>
        <option value="Date">일정으로 검색</option>
      </select>
      최근 검색어 : {{searchWords}}
    </div>
    <br>  
    <div class="SearchBar" v-if="Option == 'Tag'">
      <input type="text" v-model="input" placeholder="태그를 입력하세요">
      <button v-on:click="add">태그추가</button>
      <button v-on:click="searchData()" >검색</button>
      <br>
      <ul class="tags">
        <li v-for="(tag, index) in tags" :key="index">
          {{ tag }}
          <a v-on:click="remove(index)">x</a>
        </li>
      </ul>
    </div>
    <div class="SearchBar" v-else-if="Option == 'Date'">
      <input type="date" v-model="Date" name="Date">
      <button v-on:click="searchData()" >검색</button>
    </div>
    <div class="SearchBar" v-else>
      <input placeholder="검색어를 입력하세요" v-model="searchWord" name="searchWord">
      <button v-on:click="searchData()" >검색</button>
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
      searchWords: '',
      Option: '',
      tags: [],
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
    },
    add() {
      this.tags.push(this.input);
      this.input = "";
    },
    remove(index) {
      this.tags.splice(index, 1);
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
    width: 120px;
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
.tags {
  li {
    display: inline-block;
    padding: 7px;
    margin-right: 3px;
    background-color: #eee;
  }
}


</style>

