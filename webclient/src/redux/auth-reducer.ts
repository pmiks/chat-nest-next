const SET_LOGIN = 'SET_LOGIN'
const SET_LOGOUT = 'SET_LOGOUT'
const IS_AUTH_FETCHING = 'IS_AUTH_FETCHING'

type UserInterface = {
  username: string
  password?: string | null
  token?: string | null
}

export type AuthStateType = {
  isAuth: boolean
  user: UserInterface
  isFetching: boolean
}

const defaultAuthState: AuthStateType = {
  isAuth: false,
  user: { username: null, token: null },
  isFetching: false,
}

export default function authReducer(
  state: AuthStateType = defaultAuthState,
  action: AuthAT,
): AuthStateType {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        isFetching: false,
      }
    case SET_LOGOUT:
      return { ...state, isAuth: false, user: { username: null, token: null } }
    case IS_AUTH_FETCHING:
      return { ...state, isFetching: action.payload }
    default:
      return state
  }
}

type SetLoginAT = { type: typeof SET_LOGIN; payload: UserInterface }
type SetLogoutAT = { type: typeof SET_LOGOUT }
type IsAuthFetchingAT = { type: typeof IS_AUTH_FETCHING; payload: boolean }
type AuthAT = SetLoginAT | SetLogoutAT | IsAuthFetchingAT

export const setLoginAC = (user: UserInterface): SetLoginAT => ({
  type: SET_LOGIN,
  payload: user,
})

export const setLogoutAC = (): SetLogoutAT => ({
  type: SET_LOGOUT,
})

export const isAuthFetchingAC = (bool: boolean = false): IsAuthFetchingAT => ({
  type: IS_AUTH_FETCHING,
  payload: bool,
})
