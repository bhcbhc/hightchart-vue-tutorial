// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Row,
  Col,
  Button,
  Table,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Checkbox,
  DatePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading
} from 'element-ui'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './utils/worldmap'

stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.component(Checkbox.name, Checkbox)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)

Vue.use(Loading)

Vue.use(HighchartsVue, {tagName: 'chart'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
