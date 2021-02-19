import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../src/ui/navbar/navbar'
import LoginForm from '../src/ui/auth/login.screen'

import { Box } from '../src/ui/box/box'
import { useDispatch, useSelector } from 'react-redux'
import { AuthStateType } from '../src/redux/auth-reducer'
import { loginTC } from '../src/redux/auth-thunks'
import { Loader } from '../src/ui/Loader/loader'
export default function Home() {
  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.auth.isFetching)

  const onLogin = (user: string, password: string) => {
    dispatch(loginTC({ username: user, password: password }))
  }

  const userInfo: AuthStateType = useSelector<AuthStateType>(
    state => state.auth,
  )

  const isAuth: boolean = useSelector<AuthStateType>(state => state.auth.isAuth)

  return (
    <div>
      <NavBar />
      {isFetching ? (
        <Loader />
      ) : isAuth ? (
        <Box mt="35px" display="flex" flexDirection="column" textAlign="center">
          <div>Пользователь:{userInfo.user.username}</div>
          <div>Токен:{userInfo.user.token}</div>
        </Box>
      ) : (
        <LoginForm onLoginClick={onLogin} />
      )}
    </div>
  )
}
