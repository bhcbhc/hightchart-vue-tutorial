<template>
  <el-row class="content">
    <el-col :span="4" class="menu">
      <el-menu
        @open="menuOpen"
        @select="menuSelect"
        background-color="#e1e6f0"
        text-color="#000"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="fa fa-gg-circle"></i>
            <span>图一 </span>
          </template>
          <el-menu-item index="1-1">子图1</el-menu-item>
          <el-menu-item index="1-2">子图2</el-menu-item>
          <el-menu-item index="1-3">子图3</el-menu-item>
          <el-menu-item index="1-4">子图4</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <template>
            <i class="fa fa-gg-circle"></i>
            <span slot="title">图一</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <template>
            <i class="fa fa-gg-circle"></i>
            <span slot="title">图3</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20" class="dashboard">
      <router-view />
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    menuOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    menuSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
  .content, .menu, .dashboard, .menu ul{
    height: 100%;
  }
</style>
