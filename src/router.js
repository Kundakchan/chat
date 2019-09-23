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
      component: () => import('@/views/chat'),
      children: [
        {
          path: '',
          component: () => import('@/views/profile')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/profile')
        },
        {
          path: 'friends',
          name: 'friends',
          component: () => import('@/views/friends')
        },
        {
          path: 'scroll',
          name: 'scroll',
          component: () => import('@/views/scroll')
        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import('@/views/comment')
        },
        {
          path: 'camera',
          name: 'camera',
          component: () => import('@/views/camera')
        },
        {
          path: 'video',
          name: 'video',
          component: () => import('@/views/video')
        }
      ]
    }
  ]
})
