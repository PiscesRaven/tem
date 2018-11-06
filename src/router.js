import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainPage from './components/MainPage.vue'
import Aboutus from './components/Aboutus.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: () => import( /* webpackChunkName: "about" */ './components/Aboutus.vue')

    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.

    //   component: () => import( /* webpackChunkName: "about" */ './components/Aboutus.vue')
    // }
  ]
})