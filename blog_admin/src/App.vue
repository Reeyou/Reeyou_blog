<template>
  <div class="layout">
    <!-- <Menu /> -->
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  data () {
    return {
        isCollapsed: false
    }
  },
  components: {
    Menu
  },
  computed: {
      rotateIcon () {
          return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
          ];
      },
      menuitemClasses () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      }
  },
  methods: {
      collapsedSider () {
          this.$refs.side1.toggleCollapse();
      }
  }
};
</script>

<style>
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
  }
</style>
