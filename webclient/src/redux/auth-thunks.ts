import { authAPI } from '../api/api'
import { isAuthFetchingAC, setLoginAC } from './auth-reducer'
export const loginTC = user => {
  return async dispatch => {
    try {
      dispatch(isAuthFetchingAC(true))
      const response = await authAPI.login(user)
      dispatch(setLoginAC(response.data))
    } catch {
    } finally {
      dispatch(isAuthFetchingAC(false))
    }
  }
}
