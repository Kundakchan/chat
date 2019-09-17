import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('@/views/signIn')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('@/views/signUp')
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('@/views/docs')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat')
    }
  ]
})
