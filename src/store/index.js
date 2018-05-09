/**
 * Created by Ninghai on 2018/5/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  token: '',
  userName: '',
  userId: '',
  count: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
