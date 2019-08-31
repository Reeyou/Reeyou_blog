<template>
  <div>
    <nav-Header :welcomeTip='welcomeTip' :backTip='backTip' />
    <div class="wrapper">
      <div class="container">
        <h2>用户登录</h2>
        <form action="">
          <div class='input'>
            <i class='iconfont icon-user'></i>
            <input type="text" placeholder="用户名">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_user}}</p>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input type="password" placeholder="登录密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_password}}</p>
          <button @click='login' type='button'>登录</button>
          <div class="tips">
            <span class='first'><a href="/#/resetPwd">忘记密码？</a></span>
            <span class='last'>没有账号？<a href="/#/register">前往注册</a></span>
          </div>
        </form>
      </div>
      <div class="bg-circle"></div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../components/index/Header'
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      welcomeTip: '欢迎登录',
      backTip: '返回首页',
      error_user: '请输入用户名',
      error_password: '请输入密码',
      error_msg: false
    }
  },
  methods: {
    ...mapMutations(['login']),
    // 登录
    login() {
      sessionStorage.setItem('loginState', true)
      this.$store.commit('login')
      this.$router.push({path: '/home'})
    }
  },
  components: {
    navHeader
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
