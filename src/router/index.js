import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: 'home', name: 'home', component: () => import('@/pages/Home')},
        {path: 'article', name: 'article', component: () => import('@/pages/Article')},
        {path: 'articleAdd', name: 'articleAdd', component: () => import('@/pages/Article/articleAdd')},
        {path: 'articleEdit', name: 'articleEdit', component: () => import('@/pages/Article/articleEdit')},
        {path: 'tag', name: 'tag', component: () => import('@/pages/Tag')},
      ]
    }
  ]
})
