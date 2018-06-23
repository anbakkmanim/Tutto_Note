<template>
  <div>
    <p style="font-size:22pt;">휴지통</p>
    <div style="padding-left:30px"><input type="checkbox" v-model="allselect" id="a1b2c3" @click="selectAll"><label>전체선택</label></div>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <input type="checkbox" v-bind:value="note._id" v-model="notelist">
        <router-link :to="'/note/' + note._id" tag="label">{{note.title}}</router-link>
        <p>{{note.content}}</p>
         <hr>
      </li>
    </ul>
    <div v-if="notelist.length > 0" class="select">
      <div>
        
        <label for="a1b2c3">{{notelist.length}} 개 선택</label>
      </div>
        <button class="but" v-on:click="removeSelect()">완전삭제</button>
       <button class="but" v-on:click="recover()">복구</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrashBin',
  data() {
    return {
      notes: [],
      checknote: [],
      notelist : [],
      noteid: "",
      allselect:false
    }
    
  },
  created() {
    this.$http.get(`http://localhost:3000/note/author/trash/` + this.$session.get("_id"))
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
    selectItem(_id) {
      this.notelist.push(_id);
    },
    selectAll() {
			this.notelist = [];
			if (!this.allselect) {
				for (let note in this.notes) {
					this.notelist.push(this.notes[note]._id);
				}
			}
    },
    removeSelect() {
      this.$http.delete(`http://localhost:3000/note/delete`, {
        array: this.notelist
      })
      .then(res => {
        alert('없다');
        this.$router.push({path:'/'});
      })
      .catch(err => {
        console.err(err);
      });
    },
    recover() {
      // http://localhost:3000/note/update/array
      this.$http.put(`http://localhost:3000/note/update/array`, {
        array: this.notelist,
        enable: true
      })
      .then(res => {
        console.log(this.notelist);
        alert('다시가');
         this.$router.push({path: '/'});
      })
      .catch(err => {
        console.err(err);
      });
    }
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
  .but{
    margin-top: 40px;
  }
}
</style>
