import { LabeledInput } from '../input/labeled-input'
import { Box } from '../box/box'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginAC, AuthState } from '../../redux/auth-reducer'
import { useState } from 'react'
import {useRouter} from 'next/router'

export default function LoginForm({ onLoginClick }) {
  const [user, setUser] = useState<string>()
  const [password, setPassword] = useState<string>()

  const router=useRouter()

  return (
    <Box
      mt="35px"
      display="flex"
      flexDirection="column"
      border="1px solid gray"
      width="30vw"
      >
      <div>Экран регистрации</div>
      <LabeledInput
        label={'Логин'}
        value={user}
        onChange={event => setUser(event.target.value)}
      />
      <LabeledInput
        label={'Пароль'}
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Box mt="35px" display="flex" flexDirection="row" justifyContent="center">
        <button onClick={() => onLoginClick(user, password)}>LOGIN</button>
        <button onClick={() => router.push('/registration')}>
          REGISTRATION
        </button>
      </Box>
    </Box>
  )
}
