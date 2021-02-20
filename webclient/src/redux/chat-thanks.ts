import { useSelector } from 'react-redux'
import { chatAPI } from '../api/api'
import { setLogoutAC } from './auth-reducer'
import { setUserGroupListAC } from './chat-reducer'

export const getUserGroupsTC = token => {
  return async (dispatch, state) => {
    try {
      console.log(token)
      const response = await chatAPI.getUserGroups(token)
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
