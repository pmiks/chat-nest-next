const SET_USER_GROUPS_LIST = 'SET_USER_GROUPS_LIST'

export type GroupListType = {
  id: string
  chatGroupName: string
  createDate: string
  updateDate: string
}

export type ChatStateType = {
  groups: GroupListType[]
}
const defaultChatState: ChatStateType = {
  groups: [],
}

type setUserGroupAT = {
  type: typeof SET_USER_GROUPS_LIST
  payload: GroupListType[]
}

export const setUserGroupListAC = (
  groups: GroupListType[],
): setUserGroupAT => ({
  type: SET_USER_GROUPS_LIST,
  payload: groups,
})

export type chatActionTypes = setUserGroupAT

export function chatReducer(
  state: ChatStateType = defaultChatState,
  action: chatActionTypes,
) {
  switch (action.type) {
    case SET_USER_GROUPS_LIST:
      return { ...state, groups: action.payload }
    default:
      return state
  }
}
