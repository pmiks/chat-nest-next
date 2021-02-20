import { LabeledInput } from '../input/labeled-input'
import { Box } from '../box/box'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginAC, AuthState } from '../../redux/auth-reducer'
import { useState } from 'react'

export default function LoginForm({ onLoginClick }) {
  const [user, setUser] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <Box
      mt="35px"
      display="flex"
      flexDirection="column"
      textAlign="center"
      borderColor="gray"
      borderWidth="1px"
      borderRadius="5px">
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
        <button onClick={() => onLoginClick(user, password)}>
          REGISTRATION
        </button>
      </Box>
    </Box>
  )
}
