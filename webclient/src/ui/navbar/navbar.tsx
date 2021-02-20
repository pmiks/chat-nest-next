import { Box } from '../box/box'
import { useDispatch } from 'react-redux'
import { setLogoutAC } from '../../redux/auth-reducer'

export default function NavBar() {
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(setLogoutAC())
  }

  return (
    <Box
      mt={'0'}
      py={'15px'}
      px={'35px'}
      border="1px solid gray"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bg="red">
      Hi, you!!
      <button onClick={onLogout}>logout</button>
    </Box>
  )
}
