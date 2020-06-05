<template>
  <div class="home">
    <el-tooltip content="Top center" placement="top" :value="true" manual>
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-row class='total'>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <div class="card bg-purple">
          <div class="content">
            <div class="icon-con">
              <div class="icon-bg icon1"></div>
              <i class="iconfont icon-mulu"></i>
            </div>
            <div class="con">
              <p class="title">今日文章数</p>
              <p class="count">700</p>
              <p class="info">
                <span class='percent per1'>
                  <i class='iconfont icon-arrow_d'></i>
                  <span>19.9%</span>
                </span>
                <span class='tip'>less learning</span>
              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <div class="card bg-purple">
          <div class="content">
            <div class="icon-con">
              <div class="icon-bg icon2"></div>
              <i class="iconfont icon-mulu"></i>
            </div>
            <div class="con">
              <p class="title">今日文章数</p>
              <p class="count">700</p>
              <p class="info">
                <span class='tip'>increased by</span>
                <span class='percent per2'>
                  <i class='iconfont icon-arrow_d'></i>
                  <span>19.9%</span>
                </span>

              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <div class="card bg-purple">
          <div class="content">
            <div class="icon-con">
              <div class="icon-bg icon3"></div>
              <i class="iconfont icon-mulu"></i>
            </div>
            <div class="con">
              <p class="title">今日文章数</p>
              <p class="count">700</p>
              <p class="info">
                <span class='tip'>Grow Rate:</span>
                <span class='percent per3'>
                  <i class='iconfont icon-arrow_d'></i>
                  <span>19.9%</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <div class="chart-con bg-card">
          <div class="desc">
            <p><i class='iconfont icon-mulu'></i>图表展示</p>
            <i class='iconfont icon-mulu'></i>
          </div>
          <div class='echart'>
            <Echart />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="project-con bg-card">
          <div class="desc">
            <p><i class='iconfont icon-mulu'></i>开源项目</p>
            <i class='iconfont icon-mulu'></i>
          </div>
          <div class='time'>
            <Timeline />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12">
        <div class="time-con bg-card">
          <div class="desc">
            <p><i class='iconfont icon-mulu'></i>开发日志</p>
            <i class='iconfont icon-mulu'></i>
          </div>
          <div class='time'>
            <Timeline />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="task bg-card">
          <div class="desc">
            <p><i class='iconfont icon-mulu'></i>任务列表</p>
            <i class='iconfont icon-mulu'></i>
          </div>
          <div>
            <Tasklist />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Timeline from './Timeline'
import Tasklist from './Tasklist'
import Echart from './Echart'
export default {
    components: {
        Timeline,
        Tasklist,
        Echart
    }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.total {
  box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,.03), 0 0.9375rem 1.40625rem rgba(4,9,20,.03), 0 0.25rem 0.53125rem rgba(4,9,20,.05), 0 0.125rem 0.1875rem rgba(4,9,20,.03);
}
.card {
  border-radius: 4px;
  height: 180px;
  min-height: 36px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  //  box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,.03), 0 0.9375rem 1.40625rem rgba(4,9,20,.03), 0 0.25rem 0.53125rem rgba(4,9,20,.05), 0 0.125rem 0.1875rem rgba(4,9,20,.03);
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 28px;
    .icon-con {
      width: 80px;
      height: 80px;
      position: relative;
      .icon-bg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .icon1 {
        background: #f7b924!important;
      }
      .icon2 {
        background: #d92550!important;
      }
      .icon3 {
        background: #3ac47d!important;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        margin-top: -15px;
        margin-left: -15px;
        font-size: 30px;
        z-index: 5;
      }
    }
    .con {
      display: inline-block;
      margin-left: 20px;
      p {
      }
      .title {
        font-size: 14px;
        opacity: 0.68;
      }
      .count {
        font-size: 30px;
        font-weight: bold;
        margin: 10px 0;
      }
      .info {
        font-size: 14px;
        .percent {

        }
        .per1 {
          color: #d92550;
        }
        .per2 {
          color: #16aaff;
        }
        .per3 {
          color: #f7b924;
        }
        .tip {
          opacity: 0.68;
        }
      }
    }
  }
}
.bg-card {
  border-radius: 4px;
  height: 400px;
  min-height: 36px;
  margin-bottom: 20px;
  // background: #d3dce6;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,.03), 0 0.9375rem 1.40625rem rgba(4,9,20,.03), 0 0.25rem 0.53125rem rgba(4,9,20,.05), 0 0.125rem 0.1875rem rgba(4,9,20,.03);
    border-width: 0;
  .desc {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid black;
    p {
      display: inline-block;
      i {
        padding-right: 20px;
      }
    }
    i {

    }
  }
}
.chart-con {
  .echart {
    height: 340px;
    overflow: hidden;
  }
}
.project-con {
  .time {
    padding: 20px;
  }
}
.time-con {
  .time {
    padding: 20px;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
