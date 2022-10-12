<template>
  <div class="header-container">
    <div class="left-content" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold" size="small"></i>
      <i v-else class="el-icon-s-unfold" size="small"></i>
    </div>
    <div class="logo">
      AI盒子管理系统
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user-image" src="../../assets/image/a.png">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    collapseChage() {
        this.$store.commit('collapseChange')
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  background-color: #242f42;
  height: 70px;
  width: 100%;
  align-items: center;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  font-size: 22px;
}
.logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.left-content {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.right-content {
  float: right;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
}
.user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
