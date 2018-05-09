import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'
import store from '../store'

const DashBoard = r => require.ensure([], () => r(require('@/pages/dashboard')), 'DashBoard')
const HighMap = r => require.ensure([], () => r(require('@/components/map')), 'highMap')
const HighStock = r => require.ensure([], () => r(require('@/components/stock')), 'highMap')
const Login = r => require.ensure([], () => r(require('@/pages/login')), 'login')

const PieChart = r => require.ensure([], () => r(require('@/components/chart/piechart')), 'piechart')
const BarChart = r => require.ensure([], () => r(require('@/components/chart/barchart')), 'barchart')
const LineChart = r => require.ensure([], () => r(require('@/components/chart/linechart')), 'linechart')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'dashBoard',
    component: DashBoard,
    children: [{
      path: 'piechart', component: PieChart
    }, {
      path: 'barchart', component: BarChart
    }, {
      path: 'linechart', component: LineChart
    }]
  }, {
    path: '/highmap',
    name: 'highmap',
    component: HighMap
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/highstock',
    name: 'highstock',
    component: HighStock
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // 不匹配， 返回首页
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/')
  } else {
    next()
  }
  // 路由拦截，登录限制
  if (to.meta.requireAuth) {
    if (VueCookie.get('token') || store.state.token) next()
    else {
      next({path: '/login'})
    }
  }
})

export default router
