/**
 * Created by Ninghai on 2018/5/4.
 */
import {
  ADD_COUNT,
  SET_USER_MESSAGE
} from './mutation-types'

export default {
  [ADD_COUNT] (state, payload) {
    state.count += payload.count
  },
  [SET_USER_MESSAGE] (state, {userName, userId, token}) {
    state.userName = userName
    state.userId = userId
    state.token = token
  }
}
