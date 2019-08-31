<template>
  <div class='menu-container'>
    <Menu
        theme="dark"
        width="auto"
    >
        <MenuItem >
            <span>logo</span>
        </MenuItem>
        <MenuGroup title="内容管理"  v-for='(menuItem,index) in menuList'
                    :key='index'>
            <router-link :to="menuItem.path">
                <MenuItem >
                    <Icon :type='menuItem.icon'></Icon>
                    <span>{{menuItem.name}}</span>
                </MenuItem>
            </router-link>
        </MenuGroup>
        
    </Menu>
  </div>
</template>

<script>
import menuList from '@/config/menu.js'
  export default {
    data() {
        return {
            menuList: menuList
        }
    },
    mounted() {
        console.log(this.menuList)
    }
  }
</script>

<style lang="scss" scoped>
.menu-container {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 0;
}
  .menu-icon{
      transition: all .3s;
  }
  .rotate-icon{
      transform: rotate(-90deg);
  }
  .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }
  .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
  }
  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
</style>