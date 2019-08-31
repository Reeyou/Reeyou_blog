<template>
  <div>
    <nav-Header :welcomeTip='welcomeTip' :backTip='backTip' />
    <div class="wrapper">
      <div class="container">
        <h2>修改密码</h2>
        <form action="">
          <div class='input'>
            <i class='iconfont icon-user'></i>
            <input type="text" placeholder="用户名">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_user}}</p>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input type="password" placeholder="原登录密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_password}}</p>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input type="password" placeholder="新登录密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_pwdConfirm}}</p>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input type="password" placeholder="再次确认密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_pwdConfirm}}</p>
          <button>修改密码</button>
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
      welcomeTip: '修改密码',
      backTip: '返回首页',
      error_user: '请输入用户名',
      error_password: '请输入密码',
      error_pwdConfirm: '再次输入密码',
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
