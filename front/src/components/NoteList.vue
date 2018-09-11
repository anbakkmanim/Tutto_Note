<template>
  <v-layout row wrap>
  
    <v-container>
       <div v-if="notelist.length > 0" class="select">
           <v-flex xs2>
          <v-checkbox style="float:left;" :value="allselect" id="a1b2c3" @click="selectAlla"></v-checkbox>
    </v-flex>
        <div>
          <label for="a1b2c3">{{notelist.length}} 개 선택</label>
        </div>
          <v-btn color="nomal" class="but" v-on:click="gotrash()"  v-if="this.$route.path === '/' || this.$route.path === '/search'" >휴지통</v-btn>
          <v-btn color="nomal" class="but" v-on:click="remove()" v-if="this.$route.path === '/trash'" >삭제</v-btn>
          <v-btn color="nomal" class="but" v-on:click="rollback()"  v-if="this.$route.path === '/trash'"  >복구</v-btn>
      </div>
    </v-container>
    <v-flex
      xs12 md6 lg4
      v-for="(note, i) in notes" :key="i"
    >
      <v-card
        :color="note.color"
        class="white--text"
      >
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs2>
              <div>
                <v-checkbox v-model="notelist" v-bind:value="note._id"></v-checkbox>
              </div>
            </v-flex>
            <v-flex xs7>
              <div>
                <v-card-title primary-title v-on:click="viewNote(note._id)">
                  <div>
                    <h3 class="headline">{{note.title}}</h3>
                    <div> {{note.content}}</div>  
                  </div>
                </v-card-title>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

    </v-flex>
         
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoteList',
  props: {
    notes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      notelist:[],
      allselect:false
    }
  },
  computed: {
    ...mapGetters([
      'jwt',
      'jwtData',
      'jwtSubject',
      'jwtIssuer'
    ])
  },
  created() {
  },
  methods: {
    selectItem(_id) {
      this.notelist.push(_id);
    },
    selectAlla() {
      if(this.allselect === true) {
         console.log(`allselect is ${this.allselect}`)
				for (let note in this.notes) {
					this.notelist.push(this.notes[note]._id);
        }
        this.allselect = false
      }
      else if (this.allselect === false) {
        
        console.log(`allselect is ${this.allselect}`)
        this.allselect = true
			  this.notelist = []
        
        console.log(`allselect is ${this.allselect}`)
      }
    },
    viewNote(_id) {
      this.$router.push({path: `/noteview/${_id}`})
    },
    gotrash() {
      let options = {
        method: 'PUT',
        url: 'http://115.68.24.158:3000/note/',
        headers: {
          'X-Access-Token': this.jwt
        },
        data: {
          enable: false
        }
      }
      this.notelist.forEach((el) => {
        options.url += el
        console.log(options)
        this.$http(options)
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
        options.url = 'http://115.68.24.158:3000/note/'
      })
      alert('노트가 휴지통으로 이동했습니다.')
      this.$router.push({path:'/trash'})
    },
    remove(){
      let options = {
        method: 'DELETE',
        url: 'http://115.68.24.158:3000/note/',
        headers: {
          'X-Access-Token': this.jwt
        },
        data: {}
      }
      this.notelist.forEach((el) => {
        console.log(this.jwt)
        options.url += el
        console.log(options)
        this.$http(options)
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
        options.url = 'http://115.68.24.158:3000/note/'
      })
      alert('노트를 삭제했습니다.')
      this.$router.push({path:'/'})
    },
    rollback(){
      let options = {
        method: 'PUT',
        url: 'http://115.68.24.158:3000/note/',
        headers: {
          'X-Access-Token': this.jwt
        },
        data: {
          enable:true
        }
      }
      this.notelist.forEach((el) => {
        options.url += el
        console.log(options)
        this.$http(options)
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
        options.url = 'http://115.68.24.158:3000/note/'
      })
      alert('노트를 복구했습니다.')
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="scss">
label{
  float:left;
  width: 100px;
  padding-top: 10px;
  padding-left: 10px;
}
</style>
