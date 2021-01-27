import { LabeledInput } from '../src/ui/input/labeled-input'
import { Box } from '../src/ui/box/box'
export default function LoginScreen() {
  return (
    <Box>
      <div>Экран регистрации</div>
      <LabeledInput label={'Логин'} />
      <LabeledInput label={'Пароль'} />
    </Box>
  )
}
