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
        <h4 class="fadeTop delay-800 sub_title">用户{{title}}</h4>
        <slot></slot>
        <re-button type="primary" class="fadeTop btn delay-1600" @click="click">{{title}}</re-button>
          <div class="tips fadeTop delay-2000">
            <span class="last">
              {{type ? '没' : '已'}}有账号？
              <a class="hlight-a" href="/register">前往{{type?'注册':'登录'}}</a>
            </span>
          </div>
      </div>
      <Footer class="footer sj_font fadeIn delay-2200" />
    </section>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    name: 'base',
    props: {
        title: String
    },
    computed: {
        type () {
            return this.title === '登录'
        }
    },
    methods: {
        click () {
            this.$emit('handleClick')
        }
    },
    components: {
        Footer
    }
}
</script>

<style src='./index.scss' lang='scss'>
</style>
