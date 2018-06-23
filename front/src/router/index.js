import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home'

import Child1 from './../components/Child1'
import Child2 from './../components/Child2'
import Child3 from './../components/Child3'

import sidebar from './../components/sidebar'
import NoteList from './../components/NoteList'
import Login from './../components/Login'
import List from './../components/List'
import ViewTest from './../components/ViewTest'

import ListDetail from './../components/ListDetail'
import Search from './../components/Search'


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
      },
      {
        path:'',
        name:'list',
        component: List
      },
      {
        path:'/listdetail',
        name:'ListDetail',
        component:ListDetail
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
  {
    path: '/list',
    name: 'List',
    component: List
  },
  // [!! VIEW TEST ROUTER !!]
  {
    path: '/viewtest',
    name: 'ViewTest',
    component: ViewTest
  },
  {
    path: '/note/:_id',
    name: 'ListDetail',
    component: ListDetail
  },
  {
    path:'/list',
    name:'list',
    component:List
  },
  {
    path:'/sidebar',
    name:'sidebar',
    component:sidebar
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});