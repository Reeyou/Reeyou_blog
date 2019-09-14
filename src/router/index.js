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
        {path: 'article', name: 'article', component: () => import('@/pages/Article')},
        {path: 'addArticle', name: 'addArticle', component: () => import('@/pages/Article/addArticle')},
        {path: 'editArticle', name: 'editArticle', component: () => import('@/pages/Article/editArticle')},
        {path: 'tag', name: 'tag', component: () => import('@/pages/Tag')},
        {path: 'message', name: 'message', component: () => import('@/pages/Message')},
        {path: 'user', name: 'user', component: () => import('@/pages/User')},
      ]
    }
  ]
})
