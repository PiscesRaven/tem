import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CourseTable1 from './components/course/course0-8.vue'
import CourseTable2 from './components/course/course9-16.vue'
import CourseTable3 from './components/course/course17-24.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: '大樹貝兒托嬰中心',
      component: Home
    },
    {
      path: '/aboutus',
      name: '關於我們|大樹貝兒托嬰中心',
      component: () => import( /* webpackChunkName: "about" */ './components/Aboutus.vue'),

    },
    {
      path: '/course',
      name: '課程內容|大樹貝兒托嬰中心',
      component: () => import( /* webpackChunkName: "Cbout" */ './components/Course.vue'),
      children: [{
          path: '',
          name: '0~8月的課程',
          component: CourseTable1
        },
        {
          path: 'Course9-16',
          name: '9~16月的課程',
          component: CourseTable2
        }, {
          path: 'Course17-24',
          name: '17~24月的課程',
          component: CourseTable3
        }
      ]
    },
    {
      path: '/device',
      name: 'Device',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "Device" */ './components/Device.vue'),
    },
    {
      path: '/news',
      name: 'News',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "Device" */ './components/News.vue'),
    },
  ]
})