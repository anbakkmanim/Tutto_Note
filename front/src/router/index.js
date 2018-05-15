import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home'

import Child1 from './../components/Child1'
import Child2 from './../components/Child2'

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
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});