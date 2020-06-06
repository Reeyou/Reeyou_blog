<template>
  <div class='tasklist'>
    <ul>
      <li>
        <input type="checkbox">
        <div class='task'>
          <p class='name'>Badge on the right task</p>
          <p class='desc'>This task has show on hover actions!</p>
        </div>
        <div class='handle'>
          <i class='iconfont icon-mulu'></i>
          <i class='iconfont icon-mulu'></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tasklist {
  ul {
    li {
      padding: 20px;
      border-bottom: 1px solid pink;
      display: flex;
      align-items: center;
      position: relative;
      &:after {
        position: absolute;
        content: '';
        width: 4px;
        height: 60%;
        border-radius: 20px;
        background-color: red;
        left: 10px;
      }
      input[type=checkbox] {
        flex: 0 0 30px;
        border: none;
        background: #fff;
        cursor: pointer;
      }
      .task {
        display: inline-block;
        flex: 1;
        padding-left: 10px;
        .name {
          font-size: 16px;
          font-weight: bold;
          opacity: 0.8;
        }
        .desc {
          font-size: 14px;
          margin-top: 4px;
          opacity: 0.5;
        }
      }
      .handle {
        display: inline-block;
        flex: 0 0 60px;
        i {
          &:last-child {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
