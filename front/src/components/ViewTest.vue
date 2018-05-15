<!--

## ViewTest.vue

테스트용 페이지

-->


<template>
  <div class="ViewTest">
    <div class="ViewTestElem">
      <h1>NoteList.vue 미리보기</h1>
      <NoteList />
    </div>
    <div class="ViewTestElem">
      <h1>NoteList.vue 미리보기</h1>
      <NoteList />
    </div>
  </div>
</template>

<script>

import NoteList from './NoteList'

export default {
  name: 'ViewTest',
  components: { NoteList },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

// 미리보기를 테스트할 수 있는 엘리먼트입니다.
.ViewTestElem {
  margin: 5em;
  h1 {
    font: {
      size: 2em;
      weight: 900;
    }
    text-align: center;
    letter-spacing: -0.03em;
  }
  .NoteList {
    margin: 5em;
  }
}

</style>
