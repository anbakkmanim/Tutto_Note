<template>
  <div id="download">
      <section>
        <v-parallax :src="require('./../assets/cloud.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('./../assets/tutto.png')" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Tutto note</h1>
            <div class="subheading mb-3 text-xs-center" style="width:170px;">더 나은 노트사용을 위해</div>

            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              이 버튼을 눌러 다운로드
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline">Tutto Note를 시작해 보세요</h1>
              <span class="subheading">
                효율적인 노트사용으로 높아지는 능률
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">직관적인 UI</div>
                    </v-card-title>
                    <v-card-text >
                      직관적이고 깔끔한 UI로 대부분의 사람들이 쉽고 간편하게 사용할 수 있는 Tutto Note! <br><br>
                      작업할 때든지 일할 때든지 보기좋은 화면에서 집중할 수 있을거에요. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">팝업기능</div>
                    </v-card-title>
                    <v-card-text>
                      웹 버전에서는 사용할 수 없었던 노트 팝업기능을 사용할 수 있을 거에요. <br><br>
                      중요한 노트를 바탕화면에 띄워 노출시키는 것 만으로도 잊지않고 챙길 수 있을거에요!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">일단은 만들었으니까!</div>
                    </v-card-title>
                    <v-card-text>
                      안밖마님 팀에서 열심히 만들었는데 한번쯤 써 보는건 어떤가요?<br><br>
                      윈도우즈 앱 버전은 생각보다 편하고 색다른 사용감을 느낄 수 있을거에요! 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('./../assets/section.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">우리는 돈을 바라지 않습니다.</div>
            <em  style="width:130px;">무료로 Tutto Note를 사용해 봐요!</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              무료 다운로드
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Team Info</div>
                </v-card-title>
                <v-card-text>
                  안밖마님 팀은 대구소프트웨어고등학교 나르샤 프로젝트팀으로 4명의 소프트웨어 개발과 학생과
                  1명의 임베디드 소프트웨어 개발과 학생으로 이루어져 있습니다. 안밖마님팀은 기존의 무언가를 더 나은것으로 
                  만들어 조금이나마 더 편한 세상을 만들고자 하기에 끝없는 발전과 재창조를 거듭합니다. 서로 사람 대 사람으로 
                  마음을 나누며 소통하며 발전합니다.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  문의사항이나 피드백, 버그 제보는 아래 연락처로 연락을 주시면 감사하겠습니다.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>010-1234-5678</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>대구광역시 달성군 창리로 11길 93</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>tuttonote@dgsw.hs.kr</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
  </div>
</template>

<script>
export default {
  name:'download',
  data(){
    return{
      title: 'T utto Note',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
