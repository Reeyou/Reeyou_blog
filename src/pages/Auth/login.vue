<template>
  <div class="main-container">
    <section class="sidebar">
      <div class="sidebar-content">
        <div class="header">
          <h1 class="fadeTop delay-400">Reeyou</h1>
          <h2 class="fadeTop delay-600">博客后台管理平台</h2>
        </div>
        <div class="art">
          <img class="fadeIn delay-800" src="../../assets/slide.png" alt />
          <p class="fadeTop delay-1000">
            It designd by
            <a
              href="https://dribbble.com/SAMji_illustrator"
              target="_blank"
              class="hlight-a"
              :style="{verticalAlign: 'middle'}"
            >SAM JI</a> in dribbble
          </p>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="auth-content sj_font">
        <h4 class="fadeTop delay-800 sub_title">用户登录</h4>
        <form action>
          <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
            <label>用户名/邮箱地址</label>
            <i class="iconfont icon-user"></i>
            <input
              autocomplete="off"
              v-model="loginForm.usernameOrEmail"
              type="text"
              :placeholder="user"
            />
          </div>
          <p class="error_msg" v-show="error_msg">{{user}}</p>
          <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
            <label>登录密码</label>
            <i class="iconfont icon-password"></i>
            <input
              autocomplete="off"
              v-model="loginForm.password"
              type="password"
              :placeholder="password"
            />
          </div>
          <p class="error_msg" v-show="error_msg">{{password}}</p>
          <re-button type="primary" class="fadeTop btn delay-1600" @click="login">登录</re-button>
          <div class="tips fadeTop delay-2000">
            <span class="last">
              没有账号？
              <a class="hlight-a" href="/register">前往注册</a>
            </span>
          </div>
        </form>
      </div>
      <Footer class="footer sj_font fadeIn delay-2200" />
    </section>
  </div>
</template>

<script>
import { login } from '@/api/user'

import Footer from '@/components/Footer'
export default {
    name: 'login',
    data () {
        return {
            user: '请输入用户名/邮箱地址',
            password: '请输入密码',
            error_msg: false,
            loginForm: {
                usernameOrEmail: '',
                password: ''
            }
        }
    },
    methods: {
        goBack () {
            this.$router.replace({path: '/'})
        },
        login () {
            login(this.loginForm).then(res => {
                if (res.code === 200) {
                    this.$util.successMsg(res.msg)
                    sessionStorage.setItem('token', `Bearer ${res.data.token}`)
                    this.$util.resetFields(this.loginForm)
                    this.$router.push('/')
                    history.pushState(null, null, document.URL)

                    window.addEventListener('popstate', this.goBack, false)
                }
            })
        },
        validateFields () {

        }
    },
    components: {
        Footer
    }
}
</script>

<style src='./index.scss' lang='scss'>
</style>
