<template>
  <el-row class="content">
    <el-col :span="4" class="menu">
      <el-menu
        @open="menuOpen"
        @select="menuSelect"
        background-color="#e1e6f0"
        text-color="#000"
      >
        <template v-for="(item, index) in menuList">
          <el-submenu v-if="item.item.length" :index="item.route" :key="'root' + index">
            <template>
              <template slot="title">
                <i v-if="item.font" :class="'fa' +item.font"></i>
                <span> {{ item.name }} </span>
              </template>
              <el-menu-item v-for="(subItem, index) in item.item" :index="subItem.route" :key="'subRoot' + index">{{ subItem.name }}</el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :key="'root' + index" :index="item.route"> {{ item.name}}</el-menu-item>
        </template>
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
    return {
      menuList: [
        {name: '线图', route: 'line', item: [{ name: '基础折线图', route: 'basicLine' }, { name: '异步加载', route: 'asyncLine' }]},
        {name: '面积图', route: 'area', item: [{ name: '基础面积图', route: 'basicArea' }]},
        {name: '柱状图', route: 'bar', item: [{ name: '基础柱状图', route: 'basicBar' }]},
        {name: '饼状图', route: 'pie', item: [{ name: '基础饼状图', route: 'basicPie' }]},
        {name: '散点、气泡图', route: 'scatterBubble', item: []},
        {name: '混合图', route: 'mix', item: []},
        {name: '动态交互图', route: 'animation', item: []},
        {name: '3D图', route: '3d', item: []},
        {name: '仪表图', route: 'gauge', item: []},
        {name: '热力图', route: 'heatMap', item: []},
        {name: '其它图表', route: 'others', item: []}
      ]
    }
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
