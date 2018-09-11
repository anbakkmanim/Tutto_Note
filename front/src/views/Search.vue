<template>
  <div id="search">
    <v-container fluid grid-list-lg>
        <div class="search">
          <v-container  align-baseline fluid >
            <v-layout row justify-center wrap v-if="Option=='제목'">
              <v-flex>
                <v-text-field
                  placeholder="검색어를 입력해주세요"
                  v-model="title"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row justify-center wrap v-if="Option=='태그'">
              <v-flex>
                <v-combobox
                v-model="tags"
                placeholder="태그"
                chips
                clearable
                multiple>
                <template slot="selection" slot-scope="data">
                  <v-chip
                  :selected="data.selected">
                    {{ data.item }}
                  </v-chip>
                </template>
                </v-combobox>
              </v-flex>
            </v-layout>
            <v-layout  row justify-center wrap v-if="Option=='날짜'">
              <v-flex>
                <v-menu
                  ref="end"
                  :close-on-content-click="false"
                  v-model="end"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                > 
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    placeholder="날짜"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="end = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.end.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-select v-model="Option" :items="items" item-text="option"></v-select>
            </v-flex >
            <v-flex>
              <v-btn id="button" color="none" v-on:click="search()">검색</v-btn>
            </v-flex>
          </v-container>
        </div>
        <note-list
          :notes="notes"
        ></note-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NoteList from './../components/NoteList'
import qs from 'querystring'

export default {
  name: 'search',
  components: {
    NoteList
  },
  data () {
    return {
      chips: [],
      tags: [],
      notes:[],
      items: [
        {id: 1, label: 'title', option: '제목'}, 
        {id: 2, label: 'tags', option: '태그'}, 
        {id: 3, label: 'date', option: '날짜'}
      ],
      Option: '기준',
      date: '',
      start: false,
      end: false,
      title:'',
      date:'',
    }
  },
  computed:{
    ...mapGetters([
      'jwt',
      'jwtSubject',
      'jwtIssuer'
    ])
  },
  created(){
  },
  methods: {
    search() {
      let label = ''
      let option = this.Option
      if (option == '제목') {
        label = 'title'
      }
      else if (option == '태그') {
        label = 'tags'
      }
      else if (option == '날짜') {
        label = 'date'
      }

      let options = {
        method: 'GET',
        url: `http://115.68.24.158:3000/note/search/${label}?${label}=${label === 'title' ? this.title : this.date}`,
        headers: {
          'X-Access-Token': this.jwt
        }
      }
      if (label === 'tags') {
        options.url = `http://115.68.24.158:3000/note/search/tags?${qs.stringify({tags: this.tags})}`
      }
      // if ()
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
    remove (tag){
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style lang="scss">

</style>
