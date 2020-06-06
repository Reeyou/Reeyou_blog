<template>
  <div>
    <base-content title="注册" @handleClick="register">
      <form action>
        <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
          <label>邮箱地址</label>
          <i class="iconfont icon-user"></i>
          <input autocomplete="off" v-model="registerForm.email" type="text" :placeholder="email" />
        </div>
        <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
          <label>用户名</label>
          <i class="iconfont icon-user"></i>
          <input autocomplete="off" v-model="registerForm.username" type="text" :placeholder="user" />
        </div>
        <p class="error_msg" v-show="error_msg">{{user}}</p>
        <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
          <label>登录密码</label>
          <i class="iconfont icon-password"></i>
          <input
            autocomplete="off"
            v-model="registerForm.password"
            type="password"
            :placeholder="password"
          />
        </div>
        <div :class="['input_container', 'fadeTop', 'delay-1200',{'err': error_msg}]">
          <label>确认密码</label>
          <i class="iconfont icon-password"></i>
          <input
            autocomplete="off"
            v-model="passwordValidate"
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
import { register } from '@/api/user'
import platform from 'platform'
import Base from './base'
export default {
    name: 'login',
    data () {
        return {
            email: '请输入邮箱地址',
            user: '请输入用户名',
            password: '请输入密码',
            error_msg: false,
            registerForm: {
                email: '',
                username: '',
                password: '',
                role: 'guest',
                os: platform.os,
                browser: platform.name,
                environment: platform.description
            },
            passwordValidate: ''
        }
    },
    methods: {
        register () {
            register(this.registerForm).then(res => {
                this.$util.successMsg(res.msg)
                this.$router.push({ path: '/login' })
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
