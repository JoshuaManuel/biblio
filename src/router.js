import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import apaBook from "./components/apaBook.vue"
import apaWebsite from "./components/apaWebsite.vue"
import chicagoBook from "./components/chicagoBook.vue"
import chicagoWebsite from "./components/chicagoWebsite.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apaBook',
      name: 'APA Book',
      component: apaBook
    },
    {
      path: '/apaWebsite',
      name: 'APA Website',
      component: apaWebsite
    },
    {
      path: '/chicagoBook',
      name: 'Chicago Book',
      component: chicagoBook
    },
    {
      path: '/chicagoWebsite',
      name: 'Chicago Website',
      component: chicagoWebsite
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
