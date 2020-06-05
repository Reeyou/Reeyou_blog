// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'
import store from './store'
import REEButton from '@/components/button'
import util from '@/utils/util'

Vue.component('chart', ECharts)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$util = util

Vue.use(REEButton)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
