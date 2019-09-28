<template>
  <div>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Dropdown>
              <a href="javascript:void(0)">
                <!-- <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /> -->
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <span @click="toUserInfo">个人信息</span>
                </DropdownItem>
                <DropdownItem style="color: #ed4014">
                  <span @click="logout">退出</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>Item 4
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toUserInfo() {

    },
    logout() {
      localStorage.removeItem('login')
      this.$router.push({path: '/login'})
    }
  }
};
</script>

<style lang="scss" scoped>
.ivu-layout-header {
  padding: 0;
}
.layout-nav {
  width: auto;
  float: right;
}
</style>