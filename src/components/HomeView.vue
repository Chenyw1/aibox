// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div id="app">
    <common-header></common-header>
    <common-aside></common-aside>
    <div class="content" >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CommonAside from "../components/common/CommonAside.vue";
import CommonHeader from "../components/common/CommonHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
.content {
  position: absolute;
  left: 200px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
  width: auto;
}
</style>
