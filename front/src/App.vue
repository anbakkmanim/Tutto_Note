<!--

## 기본 Vue 파일 작성 방법

1. template, script, style(scss) 태그 사용
2. Spacing = 2
3. 주석 적당히 + 많이 달아두기
4. ES6 사용, 단 세미콜론 붙이기

-->


<template>
  <div id="app">
    <!-- 라우터 사용 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
