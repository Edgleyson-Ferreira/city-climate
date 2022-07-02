import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import AboutPage from '../pages/AboutPage/AboutPage.vue'
import ContactPage from '../pages/ContactPage/ContactPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component:AboutPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component:ContactPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
