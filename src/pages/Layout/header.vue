<template>
  <div class='header'>
    <i v-if='muluVisible' class='iconfont icon-mulu1 mobile' @click='openMenu'></i>
    <i v-else class='iconfont icon-md-close mobile' @click='closeMenu'></i>
    <img class='logo' src="@/assets/logo_bg.jpg" alt="">
    <el-dropdown class="system-user">
      <span class="userinfo-inner">
        <span class='name'>Reeyou</span>
        <img src="@/assets/logo.png" alt="">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native='logout' divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        scrrenWidth: '',
        muluVisible: true
      }
    },
    mounted() {
      window.onresize = () => {
        this.scrrenWidth = document.body.clientWidth
        this.$store.commit('SCREEN_WIDTH',this.scrrenWidth)
      }
    },
    computed: {
      ...mapState({
        menuVisible: state => state.menuVisible
      })
    },
    methods: {
      ...mapMutations([
        'MENU_VISIBLE'
      ]),
      logout() {
        this.$router.push('./login')
        sessionStorage.removeItem('currentRouter')
      },
      openMenu() {
        this.muluVisible = false
        this.MENU_VISIBLE(true)
      },
      closeMenu() {
        this.muluVisible = true
        this.MENU_VISIBLE(false)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './media.scss';
.header {
  width: 100%;
  background: #fff;
  position: fixed;
  line-height: 64px;
  height: 64px;
  padding: 0 20px 0 0;
  z-index: 90;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,.08);
  .logo {
    display: none;
  }
  .mobile {
    font-size: 30px;
    margin-left: 20px;
    color: #000;
  }
}
.system-user {
  text-align: right;
  float: right;
  padding-right: 16px;
  .userinfo-inner {
    color: #000;
    font-size: 16px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
}
@media screen and(max-width: 900px) {
  .header{
    z-index: 200;
    .logo {
      display: inline;
      width: 82px;
      height: 64px;
      position: absolute;
      left: 50%;
      margin-left: -41px;
    }
  }
  .system-user {
    .userinfo-inner {
      .name {
        display: none;
      }
    }
  }
}
</style>