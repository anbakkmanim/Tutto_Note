<template>
  <div id="app">
    <img :src="require('./../assets/login_bg.png')" class="bg">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>TuttoNote</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="person" name="login" placeholder="Userid" type="text" v-model="userid"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" placeholder="Password" id="password" type="password" v-model="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-on:click="login()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      userid: "",
      password: ""
    }
  },
  methods:{
     ...mapActions([
      `fetchJWT`
    ]),
    login() {
      this.fetchJWT({
        // #Security...
        userid: this.userid,
        password: this.password
      });
      this.$router.push('/');
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}
img.bg {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  background: url('./../assets/login_bg1.png') center no-repeat fixed;
  background-size: cover;
}
</style>
