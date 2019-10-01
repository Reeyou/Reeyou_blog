<template>
  <el-container class="layout-content">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <slot name="left"></slot>
    </el-aside>
    <!-- 右侧页面 -->
    <el-main>
      <!-- 面包屑 -->
      <div class="top">
        <i class="el-icon-house"></i>
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item
            v-for='(item,index) in breadItems'
            :key='index'
            :to='{path:item.path}'
          >{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 页面内容 -->
      <div class="content">
        <slot name="content"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        breadItems: []
      }
    },
    created() {
      this.initBreadCrumb(this.$route)
      // console.log(this.$route)
    },
    watch:{
      // 监听路由改变
      $route(to,from){
        console.log( this.breadItems)
        this.initBreadCrumb(to)
      }
    },
    methods: {
      initBreadCrumb(routers) {
        // 初始化面包屑数组
        let currentBread = [{path: '/', title: '后台管理系统'}]
        for(let index in routers.matched) {
          if(routers.matched[index].meta && routers.matched[index].meta.title) {
            currentBread.push({
              path: routers.matched[index].path ? routers.matched[index].path : "/",
              title: routers.matched[index].meta.title
            })
          }
        }
        this.breadItems = currentBread
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.layout-content {
  width: 100%;
  height: 100%;
  .el-main {
    padding: 0;
    overflow: hidden;
    margin-top: 64px;
    .top {
      width: 100%;
      background: #fff;
      height: 54px;
      border-right: none;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 10;
      i {
        font-size: 16px;
        cursor: pointer;
        padding-left: 16px;
      }
      .breadcrumb {
        padding-left: 4px;
      }
    }
    .content {
      margin-top: 60px;
      padding: 20px;
      height: calc(100% - 54px);
      box-sizing: border-box;
    }
  }
}
</style>