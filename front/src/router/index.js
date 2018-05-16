import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home'

import Child1 from './../components/Child1'
import Child2 from './../components/Child2'
import Child3 from './../components/Child3'

import NoteList from './../components/NoteList'
import Login from './../components/Login'

import ViewTest from './../components/ViewTest'

Vue.use(VueRouter);

// 라우트 정의
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/child1',
        name: 'Child1',
        component: Child1
      },
      {
        path: '/child2',
        name: 'Child2',
        component: Child2
      },
      {
        path: '/child3',
        name: 'Child3',
        component: Child3
      }
    ]
  },
  {
    path: '/notes',
    name: 'NoteList',
    component: NoteList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // [!! VIEW TEST ROUTER !!]
  {
    path: '/viewtest',
    name: 'ViewTest',
    component: ViewTest
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});