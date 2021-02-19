import { LabeledInput } from '../input/labeled-input'
import { Box } from '../box/box'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginAC, AuthState } from '../../redux/auth-reducer'
import { useState } from 'react'

export default function RegistrationForm() {
  const [user, setUser] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [surname, setSurname] = useState<string>()

  return (
    <Box
      mt="35px"
      display="flex"
      flexDirection="column"
      justifyContent="center">
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
      <LabeledInput
        label={'Почта'}
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <LabeledInput
        label={'Имя'}
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <LabeledInput
        label={'Фамилия'}
        value={surname}
        onChange={event => setSurname(event.target.value)}
      />

      <Box mt="35px" display="flex" flexDirection="column" textAlign="center">
        <button>Register</button>
      </Box>
    </Box>
  )
}
