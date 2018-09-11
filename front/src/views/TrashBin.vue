<template>
  <v-container fluid grid-list-lg>
    <note-list
      :notes="notes"
    ></note-list>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NoteList from './../components/NoteList'

export default {
  
  name:'trashbin',
  components: {
    NoteList
  },
  data() {
    return {
      notes: []
    }
  },
  computed: {
    ...mapGetters([
      'jwt',
      'jwtSubject',
      'jwtIssuer'
    ])
  },
  created() {
    let options = {
      method: 'GET',
      url: 'http://115.68.24.158:3000/note/get/trash',
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
  methods:{

  }
}
</script>

<style lang="scss">

</style>
