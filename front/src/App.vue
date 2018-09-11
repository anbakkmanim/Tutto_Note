<template>
  <v-app>
    <template v-if="routePath !== '/login'">
      <v-dialog v-model="dialog.isActive" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Report</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="제목" required v-model="dialog.title"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea label="오류 내용" required outline v-model="dialog.content"></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog.isActive = false">취소</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog.isActive = false">보내기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-navigation-drawer
        v-model="drawer"
        permanent
        clipped
        fixed
        ripple
        app
      >
        <v-card-media
          class="white--text"
          height="180px"
          :src="require('./assets/user_bg.png')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-avatar
                  size="72"
                  color="grey lighten-4"
                >
                  <img :src="avatarPath" alt="avatar">
                </v-avatar>
                <br>
                <br>
                <span class="headline">{{ jwtData.user.name }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-list class="pt-0">
          <template v-for="(item, i) in items">
            <v-divider
              v-if="item.divider"
              :key="i"
              dark
              class="my-3"
            >
            </v-divider>
            <v-list-tile
              v-else-if="item.display"
              ripple
              @click="route(item.route)"
              :key="i"
              :class="routePath === item.route ? 'active' : ''"
            >
              <v-list-tile-action class="">
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" class="text--secondary"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        app
        :clipped-left="clipped"
        class="indigo darken-2 white--text"   
      >
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view />
      </v-content>
      <v-footer
        app
        dark
        height="auto"
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-actions class="grey lighten-3 justify-center text--secondary">
            &copy;&nbsp;2018&nbsp;—&nbsp;<strong>Anbakkmanim</strong>
          </v-card-actions>
        </v-card>
      </v-footer>
      <v-btn
        fab
        dark
        small
        color="red"
        right
        bottom
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      ripple: true,
      login: true,
      dialog: {
        isActive: false,
        title: '',
        content: ''
      },
      items: [
        {
          icon: 'home',
          title: 'Home',
          route: '/',
          display: true
        },
        {
          icon: 'search',
          title: 'Search',
          route: '/search',
          display: true
        },
        {
          icon: 'delete',
          title: 'Trash',
          route:'/trash',
          display: true
        },
        {
          divider: true
        },
        {
          icon: 'exit_to_app',
          title: 'Logout',
          route: '/logout',
          display: true
        },
        {
          divider: true
        },
        {
          icon: 'computer',
          title: 'Download App',
          route:'/download',
          display: 'false',
          display: true
        },
        {
          icon: 'bug_report',
          title: 'Report',
          route: '/report',
          display: true
        }
      ],
      title: 'Tutto Note',
      link: "https://anbakkmanim.github.io/"
    }
  },
  created() {
  },
  computed: {
    ...mapGetters([
      'jwt',
      'jwtData',
      'jwtSubject',
      'jwtIssuer'
    ]),
    routePath() {
      return this.$route.path
    },
    avatarPath() {
      return `http://115.68.24.158:3000/${this.jwtData.user.avatar.path}`
    },
    isActive() {
      return this.$route.path
    }
  },

  methods: {
    route(route) {
      if (route !== '/logout') {
        if (route === '/report') {
          this.dialog.isActive = true
          this.dialog.title = '',
          this.dialog.content = ''
        }
        else {
          this.$router.push({path: route})
        }
      }
      else {
        this.$store.commit('setJWT', '')
        this.$store.commit('setIsAuth', false)
        this.$router.push({path: '/login'})
      }
    },
    profile() {

    },
     ...mapActions([
      `fetchJWT`
    ])
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

* {
  font-family: 'Noto Sans KR', sans-serif;
}

.active {
  background-color: #eeeeee;
}
</style>

