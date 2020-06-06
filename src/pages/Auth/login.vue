<template>
  <div>
    <base-content title="登录" @handleClick="login">
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
      </form>
    </base-content>
  </div>
</template>

<script>
import { login } from '@/api/user'

import Base from './base'
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
            this.$router.replace({ path: '/' })
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
                } else {
                    this.$util.successMsg(res.msg)
                }
            })
        },
        validateFields () {

        }
    },
    components: {
        'base-content': Base
    }
}
</script>

<style src='./index.scss' lang='scss'>
</style>
