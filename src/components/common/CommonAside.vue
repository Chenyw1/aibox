<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="rgb(50 65 87)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
        <el-menu-item :index="subItem.label">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
    </el-menu>
  </div>
</template>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/boxConfig",
          name: "boxConfig",
          label: "盒子配置",
          icon: "setting",
          url: "BoxConfig/BoxConfig",
        },
        {
          path: "/video",
          name: "video",
          label: "实时视频",
          icon: "video-camera",
          url: "Video/Video",
        },
        {
          path: "/systemConfig",
          name: "systemConfig",
          label: "系统配置",
          icon: "monitor",
          url: "SystemConfig/SystemConfig",
        },
        {
          path: "/log",
          name: "log",
          label: "系统日志",
          icon: "document",
          url: "Log/Log",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/test",
              name: "test",
              label: "测试",
              icon: "coin",
              url: "Test/Test",
            },
            {
              path: "/test1",
              name: "test1",
              label: "测试1",
              icon: "coin",
              url: "Test1/Test1",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单
    clickMenu(item) {
      // 页面路由与跳转路由不一致才允许跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
    },
  },
  computed: {
    //没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
