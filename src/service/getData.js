/**
 * Created by Ninghai on 2018/5/7.
 */
import doRequest from './fetch'
import {
  LOGIN_API_URL
} from './serviceConstant'

export const sendLogin = ({ userName, password }) => doRequest({
  method: 'PUT',
  url: LOGIN_API_URL,
  data: { userName, password }
})
