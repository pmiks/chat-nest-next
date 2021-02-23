import Cookies from 'js-cookies'
import { Box } from './ui/box/box'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserGroupsTC } from './redux/chat-thanks'
import { GroupListType } from './redux/chat-reducer'

export default function GroupList() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  const token: string = useSelector(state => state.auth.user.token)
  useEffect(() => {
    dispatch(getUserGroupsTC(token))
  }, [])

  const groupList: GroupListType[] = useSelector(state => state.chat.groups)
  return (
    <Box>
      <button
        onClick={() => {
          dispatch(getUserGroupsTC(token))
        }}>
        {isAuth ? 'Авторизован' : 'Неавторизован'}
      </button>
      {groupList.map((group: GroupListType) => {
        return <div>{group.chatGroupName}</div>
      })}
    </Box>
  )
}
