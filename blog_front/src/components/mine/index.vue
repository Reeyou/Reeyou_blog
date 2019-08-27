<template>
  <div class='mine'>
    <div class="avatar">
      <img src="../../assets/reeyou.jpg" alt="">
    </div>
    <div class="nickName">Reeyou</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .mine {
    width: 100%;
    text-align: center;
    .avatar img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .nickName {
      color: #000;
      font-size: 14px;
      margin: 20px 0;
    }
  }
</style>