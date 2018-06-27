import Vue from 'vue'
import Router from 'vue-router'
import Timeline from './views/Timeline.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
