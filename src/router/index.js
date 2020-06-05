import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)
// 解决router版本问题 this.$route 报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

export const routers = [
    {
        path: '/login',
        name: 'login',
        hidden: true,
        meta: { title: '系统登录' },
        component: () => import('@/pages/Login')
    },
    {
        path: '/register',
        name: 'register',
        hidden: true,
        meta: { title: '系统注册' },
        component: () => import('@/pages/Login/register')
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        hidden: false,
        children: [
            {
                path: '/',
                name: 'home',
                meta: { title: '首页', icon: 'el-icon-house' },
                component: () => import('@/pages/Home')
            }
        ]
    },
    {
        path: '/articleManage',
        name: 'articleManage',
        hidden: false,
        meta: { title: '内容管理', icon: 'el-icon-collection' },
        component: Layout,
        children: [
            {
                path: '/articleManage',
                name: 'articleManage',
                hidden: false,
                meta: { title: '文章管理', icon: 'el-icon-reading' },
                component: () => import('@/pages/Article')
            },
            {
                path: '/addArticle',
                name: 'addArticle',
                hidden: true,
                meta: { title: '添加文章' },
                component: () => import('@/pages/Article/addArticle.vue')
            },
            {
                path: '/tagManage',
                name: 'tagManage',
                hidden: false,
                meta: { title: '标签管理', icon: 'el-icon-collection-tag' },
                component: () => import('@/pages/Tag')
            },
            {
                path: '/messageManage',
                name: 'messageManage',
                hidden: false,
                meta: {
                    title: '留言管理',
                    icon: 'el-icon-chat-square',
                    roles: ['admin', 'editor']
                },
                component: () => import('@/pages/Message')
            }
        ]
    },
    {
        path: '/userManage',
        name: 'userManage',
        hidden: false,
        component: Layout,
        children: [
            {
                path: '/userManage/accountData',
                name: 'accountData',
                meta: { title: '账户管理', icon: 'el-icon-user', roles: ['admin'] },
                component: () => import('@/pages/User')
            }
        ]
    }
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers
})
router.beforeEach((to, from, next) => {
    const loginState = !!sessionStorage['token']
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        if (loginState) {
            next()
        } else {
            next({path: '/login'})
        }
    }
})
export default router
