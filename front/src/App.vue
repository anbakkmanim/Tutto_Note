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

// Eric Meyer's CSS Reset

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font: {
  family: 'Nanum Gothic', sans-serif;
  }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
  &:before, &:after {
    content: '';
    content: none;
  }
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
  box-sizing: border-box;
}

// End of Eric Meyer's CSS Reset

</style>
