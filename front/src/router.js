import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Notelist from './components/NoteList'
import login from './views/Login'
import noteview from './views/NoteView'
import search from './views/Search'
import TrashBin from './views/TrashBin'
import calendar from './views/Calendar'
import download from './views/Download'

Vue.use(Router)

import store from './store' 
import { comment } from 'postcss';

const requireAuth = () => (from, to, next) => {
  if (store.getters.isAuth) return next() // isAuth === true면 페이지 이동
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth()
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: requireAuth()
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/noteview',
      name:'noteview',
      component : noteview,
      beforeEnter : requireAuth()
    },
    {
      path: '/noteview/:_id',
      name:'noteview',
      component : noteview,
      beforeEnter : requireAuth()
    },
    {
      path:'/search',
      name:'search',
      component : search,
      beforeEnter : requireAuth()
    },
    {
      path:'/trash',
      name:'TrashBin',
      component : TrashBin,
      beforeEnter : requireAuth()
    },
    {
      path:'/calendar',
      name:'Calendar',
      component : calendar,
      beforeEnter : requireAuth()

    },
    {
      path:'/download',
      name:'Download',
      component:download,
      beforeEnter:requireAuth()
    }
  ]
})
