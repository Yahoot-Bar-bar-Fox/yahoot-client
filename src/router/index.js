import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rooms from '../views/Rooms.vue'
import StartGame from '../views/StartGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:id',
    name: 'Game Room',
    component: () => import(/* webpackChunkName: "about" */ '../views/StartGame.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
