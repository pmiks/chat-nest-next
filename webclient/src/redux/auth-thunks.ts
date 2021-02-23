import { authAPI } from '../api/api'
import { isAuthFetchingAC, setLoginAC } from './auth-reducer'
import Cookies from 'js-cookies'

export const loginTC = user => {
  return async dispatch => {
    try {
      dispatch(isAuthFetchingAC(true))
      const response = await authAPI.login(user)
      dispatch(setLoginAC(response.data))
      Cookies.set("TOKEN",response.data.token)
    } catch {
    } finally {
      dispatch(isAuthFetchingAC(false))
    }
  }
}
