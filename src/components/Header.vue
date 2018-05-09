<template>
    <el-row class="header">
      <el-col :span="4">
        test content
      </el-col>
      <el-col :span="16">
        <router-link v-for="(item, index) in routes" :key="index" :to="item.url"> {{item.name}} </router-link>
      </el-col>
      <el-col :span="4">
        个人中心 test
      </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        {
          name: 'home',
          url: '/'
        }, {
          name: 'Map',
          url: '/highmap'
        }, {
          name: 'stock',
          url: '/highstock'
        }, {
          name: 'login',
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

<style lang="scss" scoped>
  .header {
    a {
      font-size: 1.4rem;
      margin-left: 1rem;
    }
  }
</style>
