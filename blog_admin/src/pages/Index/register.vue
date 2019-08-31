<template>
  <div>
    <nav-Header :welcomeTip='welcomeTip' :backTip='backTip' />
    <div class="wrapper">
      <div class="container">
        <h2>用户注册</h2>
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
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input type="password" placeholder="确认密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_pwdConfirm}}</p>
          <button>注册</button>
          <div class="tips">
            <span class='last'>已有账号？<a href="/#/login">马上登录</a></span>
          </div>
        </form>
      </div>
      <div class="bg-circle"></div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../components/index/Header'
export default {
  name: 'login',
  data () {
    return {
      welcomeTip: '欢迎注册',
      backTip: '返回首页',
      error_user: '请输入用户名',
      error_password: '请输入密码',
      error_pwdConfirm: '请确认密码',
      error_msg: false
    }
  },
  methods: {

  },
  components: {
    navHeader
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
