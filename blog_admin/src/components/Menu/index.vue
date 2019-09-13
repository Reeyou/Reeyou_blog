<template>
  <div class='menu-container'>
    <Menu  width="auto" :class="menuitemClasses" v-for='(item, index) in menuList' :key='index'>
        <router-link :to="item.path">
            <MenuItem>
                <Icon :type='item.icon'></Icon>
                <span>{{item.name}}</span>
            </MenuItem>
        </router-link>
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
}
</style>