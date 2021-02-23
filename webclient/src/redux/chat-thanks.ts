import Cookies from 'js-cookies'
import { chatAPI } from '../api/api'
import { setLogoutAC } from './auth-reducer'
import { setUserGroupListAC } from './chat-reducer'

export const getUserGroupsTC = token => {
  return async (dispatch, state) => {
  //  console.log('!!!!-------'+Cookies.get("TOKEN"))
    try {
      console.log(token)
      const response = await chatAPI.getUserGroups(Cookies.get("TOKEN"))
      if (response.status == 200) {
        console.log(response)
        dispatch(setUserGroupListAC(response.data))
      }
      if (response.status == 403) {
        dispatch(setLogoutAC())
      }
    } catch {}
  }
}
