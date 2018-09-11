import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import axios from 'axios'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    currentJWT: '',
    isAuth: false
  },
  getters:{
    jwt: state => state.currentJWT,
    jwtData: (state, getters) => state.currentJWT ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer: (state, getters) => getters.jwtData ? getters.jwtData.iss : null,
    isAuth: state => state.isAuth
  },
  mutations: {
    setJWT(state, jwt) {
      // When this updates, the getters and anything bound to them updates as well.
      state.currentJWT = jwt;
    },
    setIsAuth(state, value) {
      // When this updates, the getters and anything bound to them updates as well.
      state.isAuth = value;
    }
  },
  actions: {
    // async fetchJWT ({ commit }, { userid, password }) {
    //   // Perform the HTTP request.
    //   const res = await fetch(`http://115.68.24.158:3000/auth/login`, {
    //     userid: userid,
    //     password: password,
    //   }); 
    //   // Calls the mutation defined to update the state's JWT.
    //   commit('setJWT', await res.data.token());
    // }
    fetchJWT({commit}, {userid, password}) {
      axios.post(`http://115.68.24.158:3000/auth/login`, {
        userid: userid,
        password: password
      })
      .then(res => {
        commit('setJWT', res.data.token)
        commit('setIsAuth', true)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  plugins: [vuexLocal.plugin]
})
