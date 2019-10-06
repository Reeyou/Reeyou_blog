<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <h2>Reeyou博客后台管理平台</h2>
        <h4>用户注册</h4>
        <form action="">
          <div class='input'>
            <i class='iconfont icon-user'></i>
            <input autocomplete="off" v-model='username' type="text" placeholder="用户名">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_user}}</p>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input autocomplete="off" v-model='password' type="password" placeholder="登录密码">
          </div>
          <div class='input'>
            <i class='iconfont icon-password'></i>
            <input autocomplete="off" v-model='password' type="password" placeholder="确认密码">
          </div>
          <p class='error_msg' v-show='error_msg'>{{error_password}}</p>
          <button @click='register' type='button'>注册</button>
          <div class="tips">
            <!-- <span class='first'><a href="/#/resetPwd">忘记密码？</a></span> -->
            <span class='last'>已有账号？<a href="/login">立即登录</a></span>
          </div>
        </form>
      </div>
      <div class="bg-circle"></div>
    </div>
  </div>
</template>

<script>
import { register } from '@/service/user'
// import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      error_user: '请输入用户名',
      error_password: '请输入密码',
      error_msg: false,
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      const params = {
        username: this.username,
        password: this.password
      }
      register(params).then(res => {
        if(res.code == 200) {
          // sessionStorage.setItem('token',res.data.token)
          this.$router.push({path: '/login'})
        }
      })
    }
  },
  components: {
  
  }
}
</script>

<style src='./index.scss' lang='scss'>

</style>
