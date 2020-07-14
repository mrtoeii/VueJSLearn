import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Toobar',
    component: () => import('../components/Toolbar'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/test',
        name: 'TestComponent',
        component: () => import('../components/TestComponent')
      },
      {
        path: '/grade',
        name: 'GradeComponent',
        component: () => import('../components/GradeComponent')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
