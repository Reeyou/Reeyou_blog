import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Main from '@/pages/main'

Vue.use(Router)

const router = new Router({
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
      meta: { requireAuth: true },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('login')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login'
        // query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router
