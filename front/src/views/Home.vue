<template>
  <v-container fluid grid-list-lg>
    <v-flex xs12 class="py-2">
      <p>정렬 옵션</p>
      <v-btn-toggle v-model="sort" mandatory>
        <v-btn flat value="title">
          <span>제목순</span>
          <v-icon>format_align_left</v-icon>
        </v-btn>
        <v-btn flat value="modDate">
          <span>수정일순</span>
          <v-icon>format_align_center</v-icon>
        </v-btn>
        <v-btn flat value="creDate">
          <span>생성일순</span>
          <v-icon>format_align_right</v-icon>
        </v-btn>
      </v-btn-toggle>
    
    </v-flex>
    
    <note-list
      :notes="notes"
    ></note-list>
    <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="pink"
        v-on:click="memoadd()"
      >
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NoteList from './../components/NoteList'

export default {
  name: 'Home',
  replace: false,
  components: {
    NoteList
  },
  data() {
    return {
      sort: "title",
      notes: []
    }
  },
  created() {
    let options = {
      method: 'GET',
      url: 'http://115.68.24.158:3000/note',
      headers: {
        'X-Access-Token': this.jwt
      }
    }
    this.$http(options)
    .then(res => {
      this.notes = res.data.notes
      this.notes.forEach(el => {
        if (el.title.length >= 8)
          el.title = `${el.title.substring(0, 8)}...`
        if (el.content.length >= 13)
          el.content = `${el.content.substring(0, 13)}...`
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  computed: {
    ...mapGetters([
      'jwt',
      'jwtSubject',
      'jwtIssuer'
    ])
  },
  methods: {
    ...mapActions([
      `fetchJWT`
    ]),
    memoadd(){
      this.$router.push('/noteview');
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
