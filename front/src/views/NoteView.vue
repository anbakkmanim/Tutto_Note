<template>
  <v-container>
    <v-form>
      <v-text-field placeholder="제목" v-model="title"></v-text-field>
    </v-form>
    <v-layout row wrap>
      <v-flex xs4>
        <v-menu
          ref="picker1"
          :close-on-content-click="false"
          v-model="picker1"
          :nudge-right="40"
          :return-value.sync="start_date"
          
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="start_date"
            placeholder="Picker in menu"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="start_date" :max="end_date" @input="$refs.picker1.save(start_date)" no-title scrollable>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs4>
        <v-menu
          ref="picker2"
          :close-on-content-click="false"
          v-model="picker2"
          :nudge-right="40"
          :return-value.sync="end_date"
          
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="end_date"
            placeholder="Picker in menu"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="end_date" :min="start_date" @input="$refs.picker2.save(end_date)" no-title scrollable>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-textarea outline id="area" placeholder="내용을 입력해주세요." v-model="content" ></v-textarea>
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
    <v-flex>
      <v-combobox
        v-model="file"
        placeholder="File"
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
      <input 
        type="file"
        @change="onFileChange"
        multiple
      >
    </v-flex>
    <v-speed-dial
      v-model="fab"
      direction="right"
      transition="slide-x-transition"
      absolute
    >
      <v-btn
        slot="activator"
        v-model="fab"
        :color="color"
        dark
        fab
      >
        <v-icon>format_paint</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        v-for="(color, i) in colors" :key="i"
        fab
        dark
        small
        :color="color"
        @click="colorChange(color)"
      >
      </v-btn>
    </v-speed-dial>
    <v-flex class="btns">
      <v-btn color="primary" v-on:click="submit()">확인</v-btn>
      <v-btn color="primary" v-on:click="remove()">삭제</v-btn>
      <v-btn color="primary" v-on:click="clear()">취소</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NoteView',
  data() {
    return {
      picker1: new Date() | this.$moment('YYYY-MM-DD'),
      picker2: new Date() | this.$moment('YYYY-MM-DD'),
      chips:[],
      date1: "",
      date2: "",
      title: "",
      start_date: "",
      end_date: "",
      content: "",
      t:'',
      attachment:null,
      form: new FormData,
      tags:[],
      file:[],
      fab: false,
      colors: [
        "red darken-2",
        "orange darken-2",
        "green darken-2",
        "teal darken-2",
        "blue darken-2",
        "indigo darken-2",
        "deep-purple darken-2"
      ],
      color: "grey darken-2"
    }
  },
  created() {
    if (this.$route.params._id) {
      let options = {
        method: 'GET',
        url: `http://115.68.24.158:3000/note/${this.$route.params._id}`,
        headers: {
          'X-Access-Token': this.jwt
        }
      }
      this.$http(options)
      .then(res => {
        let data = res.data.note
        this.title = data.title
        this.content = data.content
        this.start_date = data.start_date.substring(0, 10)
        this.end_date = data.end_date.substring(0, 10)
        this.tags = data.tags
        this.color = data.color
        data.file.forEach(el => {
          this.file.push(el.name)
        })

        this.$refs.picker1.save(this.start_date)
        this.$refs.picker2.save(this.end_date)
      })
      .catch(err => {

      })
    }
  },
  methods: {
  onDateRangeChange(range) {
    this.range = range;
  }, 
  onFileChange(event){
    console.log(event);
    let selectedFile = event.target.files[0];
    this.attachment = selectedFile;
    this.file.push(event.target.files[0].name);
  },
  submit(){
    // if (this.$route.params._id) {
      let options = {
        method: 'POST',
        url: 'http://115.68.24.158:3000/note',
        headers: {
          'X-Access-Token': this.jwt
        },
        data: {
          title: this.title,
          content: this.content,
          start_date: this.start_date,
          end_date: this.end_date,
          tags: this.tags,
          color: this.color,
          
        }
      }
      console.log(this.form)
      if (this.$route.params._id) {
        options.method = "PUT"
        options.url = `http://115.68.24.158:3000/note/${this.$route.params._id}`
        this.$http(options)
        .then(res => {
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-Access-Token': this.jwt
            }
          }
          this.form.append('attach', this.attachment);
          this.$http.post(`http://115.68.24.158:3000/note/attach`, this.form, config)
          .then(res => {
            alert("업데이트 성공");
            this.$router.push({path: '/'});
          })
          .catch(err => {
            console.log(err);
            alert("업데이트 실패");
          })
        })
        .catch(err => {
          console.log(err)
        });
      }
      else {
        // const fd = new FormData();
        // fd.append('attach',this.selectedFile);
        // options.url=`http://115.68.24.158:3000/note/${this.$route.params._id}/attach`
        this.$http(options)
        .then(res => {
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-Access-Token': this.jwt
            }
          }
          this.form.append('attach', this.attachment);
          this.$http.post(`http://115.68.24.158:3000/note/attach`, this.form, config)
          .then(res => {
            alert("글 작성 성공");
            this.$router.push({path: '/'});
          })
          .catch(err => {
            console.log(err);
            alert("글작성 실패");
          })
        })
        .catch(err => {
          console.log(err);
          alert("글작성 실패");
        });
      }
    // }
    // else {
      
    // }
  },
  remove(){
    if (this.$route.params._id) {
      let options = {
        method: 'PUT',
        url: `http://115.68.24.158:3000/note/${this.$route.params._id}`,
        headers: {
          'X-Access-Token': this.jwt
        },
        data: {
          enable: false
        }
      }
      this.$http(options)
      .then(res => {
        alert('삭제 성공')
        this.$router.push({path: '/'})
      })
    }
    else {
      alert('잘못된 동작입니다.')
    }
  },
  clear(){
      this.$router.push('/');
  },
  ...mapActions([
    `fetchJWT`
  ]),
  onFileSelected(event){
    this.selectedFile= event.target.files[0]
  },
  onUpload(){
    const fd = new FormData();

  },
  colorChange(color) {
    this.color = color;
  }
},
  computed: {
  ...mapGetters([
    'jwt',
    'jwtSubject',
    'jwtIssuer'
  ])
},
}
</script>

<style lang="scss">
#area{
  height: 500px;
}
.btns{
  padding-left: 40%;
}

</style>
