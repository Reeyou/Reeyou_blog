<template>
  <el-container class="layout-content">
    <!-- 左侧菜单 -->
    <el-aside v-if='menuVisible' style='width: 200px' ref='slider' class='slider'>
      <slot name="left"></slot>
    </el-aside>
    <!-- 右侧页面 -->
    <el-main>
      <!-- 面包屑 -->
      <div class="bread">
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
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        breadItems: []
      }
    },
    created() {
      this.initBreadCrumb(this.$route)
    },
    watch:{
      // 监听路由改变
      $route(to,from){
        this.initBreadCrumb(to)
      },
    },
    mounted() {
      
    },
    computed: {
      ...mapState({
        menuVisible: state => state.menuVisible
      }),
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
  // min-width: 1000px;
  height: 100%;
  .sider {
    width: 200px;
  }
  .el-main {
    padding: 0;
    overflow: hidden;
    margin-top: 64px;
    .bread {
      width: 100%;
      background: #fff;
      height: 60px;
      border-right: none;
      border-bottom: 1px solid #eee;
      // background: #fefefe;
      // box-shadow: 0 1px 10px rgba(0,0,0,.04);
      display: flex;
      align-items: center;
      position: fixed;
      z-index: 10;
      padding-left: 30px;
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
      padding: 14px;
      height: calc(100% - 54px);
      box-sizing: border-box;
    }
  }
}
@media screen and(max-width: 900px) {
  .layout-content {
    .slider {
      position: absolute;
    }
    .el-main {
      .bread {
        padding-left: 0;
      }
      .content {
        padding: 10px;
      }
    }
  }
}
</style>