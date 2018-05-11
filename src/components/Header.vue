<template>
    <el-row class="header">
      <el-col :span="4">
        <h1>Vue使用highcharts</h1>
      </el-col>
      <el-col :span="16">
        <router-link v-for="(item, index) in routes" :key="index" :to="item.url"> {{item.name}} </router-link>
      </el-col>
      <el-col :span="4">
        <span>个人中心</span>
      </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        {
          name: 'Home',
          url: '/'
        }, {
          name: 'Map',
          url: '/highmap'
        }, {
          name: 'Stock',
          url: '/highstock'
        }, {
          name: 'Login',
          url: '/login'
        }
      ]
    }
  },
  methods: {
    linkClick (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
