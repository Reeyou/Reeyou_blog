<template>
  <div class="menu-container">
    <Menu width="auto">
      <div v-for="(item, index) in menuList" :key="index" >
        <router-link :to="item.path">
          <MenuItem :name="item.key">
            <Icon :type="item.icon"></Icon>

            {{item.name}}
          </MenuItem>
        </router-link>
      </div>
    </Menu>
  </div>
</template>

<script>
import menuList from "@/config/menu.js";
export default {
  data() {
    return {
      menuList
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100vh;
}
</style>