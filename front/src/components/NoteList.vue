<!--

## NoteList.vue

노트 리스트 불러오는 페이지

-->


<template>
  <div class="NoteList">
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <h2>{{note.name}}</h2>
        <p>{{note.company.catchPhrase}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      notes: []
    }
  },
  created() {
    this.$http.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      this.notes = res.data;
    })
  }
}
</script>

<style lang="scss" scoped>

// Variables
$border-color: #bdc3c7;

ul {
  li {

    // Styling
    padding: 1.4em 0.8em;
    margin: 0 1em;
    border-bottom: 0.5px solid $border-color;
    &:first-child {
      border-top: 0.5px solid $border-color;
    }
    h2 {
      font: {
        size: 1.3em;
      }
      font-weight: bolder;
      padding: 0 0 0.6em 0;
    }

    // Effects
    transition: all 0.4s;
    &:hover {
      background-color: #ececec;
      cursor: pointer;
    }
  }
}

</style>
