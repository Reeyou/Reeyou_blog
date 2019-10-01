<template>
  <div class='layout'>
    <!-- 头部 -->
    <Header />
    <Container>
      <Slider slot="left"></Slider>
      <router-view slot="content"></router-view>
    </Container>
  </div>
</template>

<script>
import Header from './header'
import Slider from './slider'
import Container from './container'
  export default {
    components: {
      Header,
      Slider,
      Container
    }
  }
</script>

<style lang="scss" scoped>

</style>