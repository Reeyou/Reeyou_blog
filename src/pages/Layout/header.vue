<template>
  <div class='header'>
    <el-row>
      <el-col :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
        <div class="system-info">
          <img class="logo" src="@/assets/logo.png" alt />
          
          <span class="title">后台管理系统</span>
        </div>
      </el-col>
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <el-dropdown class="system-user">
          <span class="userinfo-inner">
            <!-- <img :src="require('@/assets/' + getUser.key + '.jpg')" alt /> -->
            Reeyou
            <img src="@/assets/logo.png" alt="">
            <!-- {{getUser.username}} -->
            
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native='logout' divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        console.log(1)
        this.$router.push('./login')
        sessionStorage.removeItem('currentRouter')
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #495060;
  position: fixed;
  line-height: 64px;
  height: 64px;
  padding: 0 20px 0 0;
  z-index:999;
}

.system-info {
  text-align: left;
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-top: 12px;
    margin-left: 20px;
    margin-right: 10px;
    float: left;
    position: relative;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    color: azure;
    line-height: 64px;
  }
}
.system-user {
  text-align: right;
  float: right;
  padding-right: 16px;
  .userinfo-inner {
    color: #fff;
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
</style>