/**
 * Created by Ninghai on 2018/5/7.
 */
import axios from 'axios'
import VueCookie from 'vue-cookie'
import store from './store'
import router from './router'
import { SET_USER_MESSAGE } from './store/mutation-types'

axios.defaults.timeout = 2000
axios.defaults.baseURL = ''

// http request 拦截器
axios.interceptors.request.use(config => {
  const token = VueCookie.get('token') || store.state.token
  const userId = VueCookie.get('userId') || store.state.userId
  if (token && userId) config.headers.Authorization = `user-${userId}-${token}`
  return config
})

// http response 拦截器
axios.interceptors.response.use(
  res => res.data,
  error => {
    if (error.response.status === 401 || error.response.status === 403) {
      VueCookie.delete('token')
      VueCookie.delete('userId')
      store.commit({
        type: SET_USER_MESSAGE,
        userId: undefined,
        userName: undefined,
        token: undefined
      })
      router.push('login')
    }
    return Promise.reject(error.response)
  }
)

export default ({method = 'GET', url, data, params}) => axios({ method, url, data, params })
